namespace IsaApi.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; }
        public string Username { get; }
        public string Email { get; }
        public string FullName { get; }

        public UserViewModel(string id, string username, string email, string fullName)
        {
            Id = id;
            Username = username;
            Email = email;
            FullName = fullName;
        }
    }
}