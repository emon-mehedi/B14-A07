import { Bounce, ToastContainer } from "react-toastify";
import hero from '@/assets/bazar-hero.png'
import Image from "next/image";
import { IProduct } from "@/Types/Alltypes";
import Card from "@/components/Card";


export default async function Home() {
  const date=new Date().toLocaleDateString("bn-BD",{dateStyle:"full"});
  const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products');
  const data:IProduct[]=await res.json();
  return (
    <div className="container mx-auto space-y-5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="rounded-4xl mt-10 bg-white p-6">
        <div>
          <div className="flex flex-col lg:flex-row-reverse">
            <Image src={hero} height={500} width={500} alt="hero"/>
            <div>
              <button className="btn rounded-2xl text-[#4c8b43] bg-[#e6f1e7]">{date}</button>
              <h1 className="text-5xl font-bold">আজকের বাজার দাম এক নজরে</h1>
              <p className="py-6">
                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম - বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
              </p>
              <button className="btn bg-[#4c8b43] text-white">সব পণ্য দেখুন</button>
            </div>
          </div>
        </div>
      </div>


      <div>
        <h2>▲ আজ দাম বেড়েছে</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
          
          data
            .filter(product=>product.change.pct>0)
            .slice(0,6)
            .map(product=><Card key={product.id} product={product}/>)
          }
        </div>
      </div>

      <div>
        <h2>▲ আজ দাম কমেছে</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
          
          data
            .filter(product=>product.change.pct<0)
            .slice(0,6)
            .map(product=><Card key={product.id} product={product}/>)
          }
        </div>
      </div>

      <div>
        <h2>সব পণ্য</h2>
        <p>মোট {data.length}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
          data.map(product=><Card key={product.id} product={product}/>)
          }
        </div>
      </div>
    </div>
  );
}
