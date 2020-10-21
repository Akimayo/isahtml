using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace IsaApi.Extensions
{
    public static class AuthenticationOptionBuilderExtensions
    {
        public static CookieAuthenticationOptions SetupApiCookie(this CookieAuthenticationOptions options)
        {
            options.Events.OnRedirectToLogin = context =>
            {
                context.Response.StatusCode = 401;
                return Task.CompletedTask;
            };
            options.Events.OnRedirectToAccessDenied = context =>
            {
                context.Response.StatusCode = 403;
                return Task.CompletedTask;
            };

            return options;
        }
    }
}