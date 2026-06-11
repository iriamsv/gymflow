import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
  className="
    bg-slate-900
    text-white
    px-6
    py-4
    shadow-lg
    sticky
    top-0
    z-50
  "
>

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-2xl font-bold text-green-400">
          GymFlow 💪
        </h1>

        <div className="flex gap-6">

          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/workouts"
            className="hover:text-green-400 transition"
          >
            Rutinas
          </Link>

          <Link
            to="/stats"
            className="hover:text-green-400 transition"
          >
            Estadísticas
          </Link>

        </div>

      </div>

    </nav>
  );
}