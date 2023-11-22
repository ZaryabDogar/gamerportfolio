import React, {  useState } from 'react';
import { data } from '../Constants';

const Gallery = () => {
	console.log(data);
	const [items, setitems] = useState(data);
    const filterItems = (catg) => {
        const updatedItems = data.filter((curElem) => {
          return curElem.catogory === catg;
        });
      
        // Do something with the filtered items if needed
      
        setitems(updatedItems) ;
        console.log(updatedItems)
      };


	return (
		<>
			<div className="px-5 grid grid-cols-2 sm:grid-cols-4 gap-4 ">
				<button
					type="button"
					className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-gray-900 rounded-lg border border-gray-900 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out duration-300"
                    onClick={()=>setitems(data)}
				>
					All
				</button>
				<button
					type="button"
					className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-gray-900 rounded-lg border border-gray-900 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out duration-300"
                    onClick={()=>filterItems('gamejam')}
				>
					Game Jam
				</button>
				<button
					type="button"
					className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-gray-900 rounded-lg border border-gray-900 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out duration-300"
                    onClick={()=>filterItems('indie')}

				>
					Indie
				</button>
				<button
					type="button"
					className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-gray-900 rounded-lg border border-gray-900 hover:bg-gray-100 hover:text-gray-900 transition-all ease-in-out duration-300"
                    onClick={()=>filterItems('education')}
				>
					Education
				</button>
			</div>
			<div className="grid sm:grid-cols-3 gid-cols-2 md:grid-cols-5 gap-[2px] py-8 transition-all ease-in-out duration-500">
				{items.map((item) => (
					<div key={item.id} className="border transition-all ease-in-out duration-500">
						<img
							src={item.image}
							width={294}
							height={144}
							alt={item.catogory}
                            className='w-[294px] h-[164px]'
						/>{' '}
					
					</div>
				))}
			</div>
		</>
	);
};

export default Gallery;