/*
  # Create contact_submissions table

  ## Purpose
  Stores contact form submissions from the HANDSTUFF Handmade Bags website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key)
    - `name` (text) - Submitter's full name
    - `email` (text) - Contact email
    - `phone` (text) - Optional phone number
    - `service_type` (text) - Type of bag category requested
    - `message` (text) - The inquiry message
    - `created_at` (timestamptz) - Submission timestamp
    - `status` (text) - Status of submission: pending/read/replied

  ## Security
  - RLS enabled
  - INSERT allowed for all (anonymous users can submit)
  - SELECT/UPDATE only for authenticated admin users
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_type text DEFAULT 'general',
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
