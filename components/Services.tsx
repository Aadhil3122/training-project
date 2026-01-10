const services = [
  { title: "Quran Learning", img: "/images/service1.jpg" },
  { title: "Arabic Classes", img: "/images/service2.jpg" },
  { title: "Islamic Studies", img: "/images/service3.jpg" },
];

export default function Services() {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white p-5 shadow rounded text-center"
          >
            <img src={s.img} className="h-40 mx-auto" />
            <h3 className="mt-4 font-bold">{s.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
