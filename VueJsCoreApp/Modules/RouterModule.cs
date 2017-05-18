using Nancy;
using System;
using VueJsCoreApp.Models;
using VueJsCoreApp.Services.RedirectLogger;
using VueJsCoreApp.Services.Shrinker;

namespace VueJsCoreApp.Modules
{
    public class RouterModule : NancyModule
    {
        public RouterModule() : base("/r")
        {
            Get("{su}", async args =>
            {
                var shrunkUrl = await ShrinkerService.RetrieveShrunkUrlAsync((string)args.su);
                if (shrunkUrl == null)
                {
                    return new Response().WithStatusCode(HttpStatusCode.NotFound);
                }
                // Log request, analytics, etc.
                await RedirectLoggerService.LogRedirectAsync(new UrlRedirectEvent
                {
                    ClientAddress = Request.UserHostAddress,
                    EventId = Guid.NewGuid().ToString("N"),
                    Referrer = Request.Headers.Referrer,
                    ShrunkUrl = shrunkUrl,
                    Timestamp = DateTime.Now
                });

                // Redirect user
                return Response.AsRedirect(shrunkUrl.Target);
            });
        }
    }
}