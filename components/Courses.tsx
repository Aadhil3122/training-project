const courses = [
  { title: "Beginner Quran", img: "/images/course1.jpg" },
  { title: "Tajweed", img: "/images/course2.jpg" },
  { title: "Hifz", img: "/images/course3.jpg" },
];

export default function Courses() {
  return (
    <div id="courses" className="py-10">
      <h2 className="text-center text-3xl font-bold mb-8">Popular Courses</h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        {courses.map((c) => (
          <div key={c.title} className="shadow rounded overflow-hidden">
            <img src={c.img} className="h-40 w-full object-cover" />
            <div className="p-4 text-center font-bold">{c.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
