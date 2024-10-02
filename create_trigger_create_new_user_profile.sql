create trigger create_new_profile_for_user
  after insert on auth.users
  for each row execute procedure public.create_profile_for_user();