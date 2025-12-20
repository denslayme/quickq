// config/supabase.js
import { createClient } from '@supabase/supabase-js';

// REPLACE THESE WITH YOUR ACTUAL VALUES FROM SUPABASE DASHBOARD
const SUPABASE_URL = 'https://ovfgcdhriqgmdszwugpp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92ZmdjZGhyaXFnbWRzend1Z3BwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxOTg3MjEsImV4cCI6MjA4MTc3NDcyMX0.gqemTfX9g_V4kuMFAWHrO1isPFC9zC_wUwyMh5Jh7n8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper functions for common operations
export const authHelpers = {
  // Sign up new user
  signUp: async (email, password, userData = {}) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData // Additional user info like name, phone
      }
    });
    return { data, error };
  },

  // Sign in user
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }
};

// Database helper functions
export const dbHelpers = {
  // Create ticket
  createTicket: async (ticketData) => {
    const { data, error } = await supabase
      .from('tickets')
      .insert([ticketData])
      .select()
      .single();
    return { data, error };
  },

  // Get user tickets
  getUserTickets: async (userId) => {
    const { data, error } = await supabase
      .from('tickets')
      .select('*, offices(name)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Get waiting tickets for office
  getWaitingTickets: async (officeId) => {
    const { data, error } = await supabase
      .from('tickets')
      .select('*')
      .eq('office_id', officeId)
      .eq('status', 'waiting')
      .order('queue_number', { ascending: true });
    return { data, error };
  },

  // Update ticket status
  updateTicketStatus: async (ticketId, status, additionalData = {}) => {
    const { data, error } = await supabase
      .from('tickets')
      .update({ status, ...additionalData })
      .eq('id', ticketId)
      .select()
      .single();
    return { data, error };
  },

  // Get all offices
  getOffices: async () => {
    const { data, error } = await supabase
      .from('offices')
      .select('*')
      .order('name');
    return { data, error };
  }
};