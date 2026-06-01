import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-white to-transparent opacity-70" />
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 rounded-full px-4 py-1.5 text-sm font-medium border-none">
              AI-Powered Automation for Startups
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Automate Smarter.{" "}
              <span className="text-indigo-600">Scale Faster.</span>
              <br />
              Grow Beyond Limits.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Aakasha Automations empowers startups and entrepreneurs with
              cutting-edge AI solutions — from intelligent voice agents to
              full-scale workflow automation — so you can focus on what truly
              matters: building your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                Book a Free Consultation
              </Button>
            </div>
          </div>
          <div className="relative lg:flex justify-end hidden">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-40" />
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">AI Assistant</p>
                    <p className="text-xs text-slate-500">Ready to help</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["How can I automate my workflow?", "What services do you offer?", "Book a demo?"].map(
                    (msg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl ${
                          i === 0
                            ? "bg-indigo-50 text-indigo-700 ml-6"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        <p className="text-sm">{msg}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero