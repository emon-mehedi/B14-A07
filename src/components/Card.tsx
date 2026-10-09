import { IProduct } from '@/Types/Alltypes';
import Link from 'next/link';

const Card = ({ product }: { product: IProduct }) => {
  const isIncreased = product.change.pct >= 0;
  return (
    <Link href={`/product/${product.id}`}>
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col justify-between gap-4 max-w-sm hover:border-green-600">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 min-w-16 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center overflow-hidden text-4xl">
          {product.image}
        </div>

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-slate-800 line-clamp-1">
            {product.nameBn}
          </h2>
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            প্রতি {product.unit}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-slate-500 font-medium mb-0.5">আজকের দাম</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-slate-900">
              ৳{product.today}
            </span>
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-1 py-1 px-2.5 rounded-full text-xs font-semibold ${
            isIncreased
              ? 'bg-rose-50 text-rose-600'
              : 'bg-emerald-50 text-emerald-600'
          }`}
        >
          <span>{isIncreased ? '▲' : '▼'}</span>
          <span>{Math.abs(product.change.pct)}%</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;