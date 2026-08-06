import Card from "../ui/Card";

function HeroCodeCard() {
  return (
    <div className="flex-1">

      <Card className="overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

          <div className="flex items-center gap-2">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-emerald-400" />

          </div>

          <div className="text-xs text-zinc-500">

            developer.py

          </div>

          <div className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">

            ● Building

          </div>

        </div>

        {/* Info Bar */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-3 text-xs text-zinc-500">

          <span>Python 3.13</span>

          <span>main</span>

          <span>FastAPI Project</span>

        </div>

        {/* Code */}

        <div className="space-y-3 p-7 font-mono text-sm leading-7">

          <div>

            <span className="text-purple-400">class</span>{" "}

            <span className="text-sky-300">Developer</span>:

          </div>

          <div className="pl-6">

            <span className="text-purple-400">def</span>{" "}

            <span className="text-sky-300">__init__</span>(

            <span className="text-orange-300">self</span>):

          </div>

          <div className="pl-12">

            <span className="text-orange-300">self</span>.name =

            <span className="text-emerald-300"> "Oğuzhan Yılmaz"</span>

          </div>

          <div className="pl-12">

            <span className="text-orange-300">self</span>.role =

            <span className="text-emerald-300"> "Backend Engineer"</span>

          </div>

          <div className="pl-12">

            <span className="text-orange-300">self</span>.status =

            <span className="text-emerald-300"> "Open To Work"</span>

          </div>

          <div className="pl-12">

            <span className="text-orange-300">self</span>.current_project =

            <span className="text-emerald-300"> "DevFolio"</span>

          </div>

          <div className="pl-12">

            <span className="text-orange-300">self</span>.learning = [

          </div>

          <div className="pl-16 text-sky-300">

            "React",

          </div>

          <div className="pl-16 text-sky-300">

            "Docker",

          </div>

          <div className="pl-16 text-sky-300">

            "System Design"

          </div>

          <div className="pl-12">

            ]

          </div>

          <div className="pl-6">

            <span className="text-purple-400">def</span>{" "}

            <span className="text-sky-300">build</span>(

            <span className="text-orange-300">self</span>):

          </div>

          <div className="pl-12">

            <span className="text-purple-400">return</span>{" "}

            <span className="text-emerald-300">

              "Clean & Scalable Software"

            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-3 text-xs text-zinc-500">

          <span>Last Commit</span>

          <span className="text-emerald-300">

            feat: redesign hero

          </span>

          <span>2 min ago</span>

        </div>

      </Card>

    </div>
  );
}

export default HeroCodeCard;