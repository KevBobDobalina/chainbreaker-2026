-- Chainbreaker 2026 Database Schema
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard → SQL Editor)

-- RSVPs table
CREATE TABLE rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  route TEXT NOT NULL CHECK (route IN ('30', '60', '100')),
  donation_amount NUMERIC(10, 2) DEFAULT 0,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Site configuration (for updatable donation amounts, event dates, etc.)
CREATE TABLE site_config (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Insert default config values
INSERT INTO site_config (key, value) VALUES
  ('suggested_donations', '[25, 50, 100, 250]'),
  ('event_date', 'TBD'),
  ('event_status', 'registration_open'),
  ('min_donation', '0');

-- Enable Row Level Security
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Anyone can insert RSVPs (public registration)
CREATE POLICY "Allow public RSVP inserts"
  ON rsvps FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only service role can read RSVPs (for admin/API use)
CREATE POLICY "Allow service role to read RSVPs"
  ON rsvps FOR SELECT
  TO service_role
  USING (true);

-- Anyone can read site config (public settings)
CREATE POLICY "Allow public to read site config"
  ON site_config FOR SELECT
  TO anon
  USING (true);

-- Only service role can update site config
CREATE POLICY "Allow service role to update site config"
  ON site_config FOR UPDATE
  TO service_role
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_rsvps_email ON rsvps (email);
CREATE INDEX idx_rsvps_route ON rsvps (route);
CREATE INDEX idx_site_config_key ON site_config (key);
