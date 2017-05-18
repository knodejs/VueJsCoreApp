﻿using Nancy;
using Nancy.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using VueJsCoreApp.Models;
using VueJsCoreApp.Services.RedirectLogger;
using VueJsCoreApp.Services.Shrinker;
using VueJsCoreApp.Utilities;

namespace VueJsCoreApp.Modules
{
    public class ShrinkApiModule : NancyModule
    {
        public ShrinkApiModule() : base("/x")
        {
            Post("/shrink", async _ =>
            {
                var req = this.Bind<ShrinkRequest>();
                // Validate request
                if (!StringUtils.IsValidUrl(req.Url))
                {
                    return new Response().WithStatusCode(HttpStatusCode.BadRequest);
                }
                var shrunkUrl = await ShrinkerService.ShrinkUrlAsync(req);
                var resp = new ShrinkResponse
                {
                    ShrunkUrl = shrunkUrl
                };
                return Response.AsJsonNet(resp);
            });

            Get("/info/{su}", async args =>
            {
                var shrunkUrl = await ShrinkerService.RetrieveShrunkUrlAsync((string)args.su);
                if (shrunkUrl == null)
                {
                    return new Response().WithStatusCode(HttpStatusCode.NotFound);
                }
                // Probably no analytics on API

                var resp = new ShrinkResponse
                {
                    ShrunkUrl = shrunkUrl
                };
                return Response.AsJsonNet(resp);
            });

            Get("/stats/{su}", async args =>
            {
                var shrunkUrl = await ShrinkerService.RetrieveShrunkUrlAsync((string)args.su);
                if (shrunkUrl == null)
                {
                    return new Response().WithStatusCode(HttpStatusCode.NotFound);
                }

                // Dump analytics data
                //var loggedRedirects = await RedirectLoggerService.GetRedirectHistory(shrunkUrl, shrunkUrl.CreatedTimestamp);
                // Last 7 days
                int daySpan = 7;
                var loggedRedirects = await RedirectLoggerService.GetRedirectHistory(shrunkUrl, DateTime.Now.Subtract(TimeSpan.FromDays(daySpan)));
                var daySortedEvents = new List<UrlRedirectEvent>[daySpan];
                for (int daysFromStart = 1; daysFromStart <= daySpan; daysFromStart++)
                {
                    var checkingDate = DateTime.Now.Subtract(TimeSpan.FromDays(daySpan - daysFromStart));
                    daySortedEvents[daysFromStart - 1] = new List<UrlRedirectEvent>(loggedRedirects.Where(x => x.Timestamp.Day == checkingDate.Day));
                }
                var resp = new RouteAnalyticsBundle
                {
                    RedirectEvents = loggedRedirects,
                    DaySpan = daySpan,
                    DaySortedEvents = daySortedEvents,
                    ShrunkUrl = shrunkUrl
                };
                return Response.AsJsonNet(resp);
            });
        }
    }
}