using Microsoft.EntityFrameworkCore;

namespace Data.Extensions
{
    public static class DbContextOptionsBuilderExtensions
    {
        public static DbContextOptionsBuilder SetupOptions(this DbContextOptionsBuilder builder)
        {
            // TODO: Put in props
            return builder.UseMySql($"Server=localhost;Database=TaskManager;User=root;Password=;");
        }
    }
}