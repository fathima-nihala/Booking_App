import SearchForm from "@/components/SearchForm"; // Import the SearchForm component
import Image from "next/image";

export default function Home() {

  const trending_data = [
    {
      id:1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzmWuDDybIEAT7RFXK9MQppjJBSpHoi8rKTQ&s",
      title: " Dubai",
      location: " Unaited Arab Emirates",
      description: "15 Deals "
    },
    {
      id:2,
      src: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhnNPoR5B5LPXk3KgPHYsUB9GuA5itsIZHQ&s",
      title: "Korea",
      location: "Asia ",
      description: "37 Deals"
    },
    {
      id:3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lfzQk7NraNcuS87iT_B2IOjlfFJu4x_sWg&s",
      title: " India",
      location: "Asia",
      description: "40 Deals "
    },
    {
      id:4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI16m9HE0TyaZRb5nvvoIeyeLZeBjGFATZTQ&s",
      title: " Palastine",
      location: " Asia",
      description: "55 Deals "
    },
    {
      id:5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94u0EyhIYQ35WVzV0LSlxZ0Ozv9tMqfzewA&s ",
      title: " France",
      location: "Europe ",
      description: "67 Deals "
    },
    {
      id:6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vvYSncbp2TOsX0RtuefRs4Nbq0CgGnejZQ&s",
      title: " Egypt",
      location: " Africa",
      description: " 80 Deals"
    },
  ]

  return (
    <main className="bg-[#130894]">

      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find Your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">Search low prices on hotel, homes and much more...</h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm/>
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destination</h3>
          <p className="font-light">Most popular choices  for travellers from around the world</p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img key={item.id} src={item.src} alt="" className="w-80 h-72 object-cover rounded-lg pb-2 " />
              <p className="font-bold ">{item.title}</p>
              <p>{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
