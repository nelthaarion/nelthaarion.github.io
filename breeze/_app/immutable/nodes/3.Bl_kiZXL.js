import{A as e,E as t,M as n,N as r,T as i,U as a,W as o,_ as s,c,f as l,h as u,j as d,k as f,m as p,o as m,x as h}from"../chunks/BgsmUUjA.js";import"../chunks/xihTtKlq.js";import{t as g}from"../chunks/B9vfnyaF.js";import"../chunks/Ct5N-BBU.js";var _=s(`<meta name="description" content="Documentation for Breeze: an event-driven Go web framework with native WebSockets, a live dashboard, events, workflows, distributed tracing, JSON-RPC, OpenAPI and more."/> <link rel="icon"/>`,1),v=s(`<a class="card svelte-1uha8ag"><h3 class="svelte-1uha8ag"> </h3> <p class="svelte-1uha8ag"> </p> <span class="read-more svelte-1uha8ag">Read the docs →</span></a>`),y=s(`<div class="page svelte-1uha8ag"><header class="hero svelte-1uha8ag"><nav class="hero-nav svelte-1uha8ag"><span class="brand svelte-1uha8ag"><span>🌬️</span> Breeze</span> <div class="links svelte-1uha8ag"><a href="/docs/getting-started" class="svelte-1uha8ag">Docs</a> <a href="/docs/examples" class="svelte-1uha8ag">Examples</a> <a href="https://github.com/nelthaarion/breeze" target="_blank" rel="noreferrer" class="svelte-1uha8ag">GitHub ↗</a></div></nav> <div class="hero-inner svelte-1uha8ag"><span class="eyebrow svelte-1uha8ag">Go · event-driven · built on gnet</span> <h1 class="svelte-1uha8ag">A ridiculously fast, event‑driven Go web framework</h1> <p class="lede svelte-1uha8ag">Built for maximum throughput, minimal allocations, native WebSockets, and a
				batteries-included path to production — a router, an event bus, durable
				workflows, distributed tracing, a JSON-RPC server, and an AI-agent control
				plane, all first-party.</p> <div class="cta-row svelte-1uha8ag"><a class="btn primary svelte-1uha8ag" href="/docs/getting-started">Get started</a> <a class="btn ghost svelte-1uha8ag" href="/docs/packages">Browse packages</a></div></div> <div class="hero-code svelte-1uha8ag"><div class="window svelte-1uha8ag"><div class="window-bar svelte-1uha8ag"><span class="dot red svelte-1uha8ag"></span><span class="dot yellow svelte-1uha8ag"></span><span class="dot green svelte-1uha8ag"></span> <span class="filename svelte-1uha8ag">main.go</span></div> <pre class="svelte-1uha8ag"><code></code></pre></div></div></header> <section class="pillars svelte-1uha8ag"><h2 class="svelte-1uha8ag">Everything a production service needs, none of it bolted on</h2> <div class="grid svelte-1uha8ag"></div></section> <section class="install svelte-1uha8ag"><h2 class="svelte-1uha8ag">Install</h2> <p>Requires Go 1.25.13 or later.</p> <pre class="svelte-1uha8ag"><code>go get  github.com/nelthaarion/breeze/v2</code></pre> <p class="fine svelte-1uha8ag">Pulls in gnet v2 for the event loop, go-json for fast marshaling, brotli for
			compression, and golang-jwt for authentication. Every other subsystem is an
			opt-in subpackage.</p></section> <footer class="site-footer svelte-1uha8ag"><p>Documentation generated for the Breeze framework. Static site, no server required.</p></footer></div>`);function b(s){let b=[{title:`Core HTTP`,desc:`Inline execution on the gnet event loop, zero-copy headers, O(1) routing, and a worker pool with real backpressure policies.`,href:`/docs/core/performance`},{title:`WebSocket, native`,desc:`A dedicated fast path for upgraded connections, ordered per-connection delivery, and DialWS for outbound peer links.`,href:`/docs/core/websocket`},{title:`Events & Workflows`,desc:`A zero-reflection typed event bus and a durable, in-process workflow engine with Saga-style compensation.`,href:`/docs/events`},{title:`See inside your app`,desc:`A 14-page live dashboard, an observability signal model, a diagnostics registry, and distributed Fleet tracing.`,href:`/docs/dashboard`},{title:`More protocols`,desc:`JSON-RPC 2.0 on its own port, OpenAPI generation with Scalar UI, byte-range video streaming, and an MCP control plane.`,href:`/docs/rpc`},{title:`Batteries, opt-in`,desc:`OAuth2 login, request binding & validation, twelve built-in middlewares, migrations, and a gnet-backed HTTP client.`,href:`/docs/middleware`}];var x=y();c(`1uha8ag`,e=>{var n=_(),a=r(d(n),2);t(()=>m(a,`href`,g)),i(()=>{f.title=`Breeze — a ridiculously fast, event-driven Go web framework`}),u(e,n)});var S=e(x),C=r(e(S),4),w=e(C),T=r(e(w),2),E=e(T);E.textContent=`package main

import (
	"runtime"

	"github.com/nelthaarion/breeze/v2"
	middleware "github.com/nelthaarion/breeze/v2/middlewares"
)

func main() {
	router := breeze.NewRouter()
	router.Use(middleware.RecoveryMiddleware())
	router.Use(middleware.LoggingMiddleware())

	router.Handle(breeze.GET, "/", func(ctx *breeze.Context) error {
		return ctx.JSON(map[string]string{"status": "ok"})
	})
	router.Handle(breeze.GET, "/users/:id", func(ctx *breeze.Context) error {
		return ctx.JSON(map[string]string{"id": ctx.Param("id")})
	})

	pool := breeze.NewEventLoopWorkerPool(runtime.NumCPU())
	app := breeze.New(router, pool)
	app.Run(3000, true) // port, multiCore
}`,o(T),o(w),o(C),o(S);var D=r(S,2),O=r(e(D),2);l(O,5,()=>b,e=>e.title,(i,s)=>{var c=v(),l=e(c),d=n(l,!0),f=r(l,2),g=n(f,!0);a(2),o(c),t(()=>{m(c,`href`,h(s).href),p(d,h(s).title),p(g,h(s).desc)}),u(i,c)}),o(O),o(D),a(4),o(x),u(s,x)}export{b as component};