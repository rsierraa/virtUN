"use client";

import { Fragment, useState } from "react";
import { Caveat } from "next/font/google";
import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";
import { Tab } from "@headlessui/react";

interface ProductsCardProps {
  products: Product[];
}

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

interface Tab {
  title: string
}

// export default function Category( {productCard}:{productCard:ProductCardProps[]}) {

const initialTabs: Tab[] = [
  {
    title: 'Entradas',
  },
  {
    title: 'Platos fuertes',
  },
  {
    title: 'Postres',
  },
  {
    title: 'Bebidas',
  },
]
export default function Category({products} : ProductsCardProps) {

  const [tabs, setTabs] = useState(initialTabs)
  console.log(products)
  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <div className={`${caveat.variable}`}>
          {/* Buttons */}
          <div className="flex justify-center">
            <Tab.List className="mb-8 inline-flex flex-wrap justify-center rounded-[20px] bg-slate-200 p-1 max-[480px]:max-w-[180px] min-[480px]:mb-12">
              {tabs.map((tab, index) => (
                <Tab key={index} as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 h-8 flex-1 whitespace-nowrap rounded-2xl px-4 text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none ${
                      selectedIndex === index
                        ? "bg-white text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }}`}
                  >
                    {tab.title}
                  </button>
                </Tab>
              ))}
            </Tab.List>
          </div>

          {/* Tab panels */}
          <Tab.Panels>
            <div className="relative flex flex-col">
              {tabs.map((tab, index) => (
                <Tab.Panel key={index} as={Fragment}>
                  <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 xl:grid-cols-3">
                    {products.filter((product) => product.category === tabs[index].title).map((product) => (
                      <ProductCard product={product} key={product.id} />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
}

// <div className="tabs tabs-boxed">
//       <a className="tab">Tab 1</a>
//       <a className="tab tab-active ">Tab 2</a>
//       <a className="tab ">Tab 3</a>
//     </div>
