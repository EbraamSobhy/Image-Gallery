import React from 'react';

function Gallery() {
    return(
        <div className='bg-black'>
        <div className="grid grid-cols-4 gap-4 mx-auto scroll-ms-6 container">
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
            <a href="#link1">
            <img src={"https://source.unsplash.com/random"} alt="" className="w-full" />
        </a>
        <div className="px-6 py-4">
            <div id="myUL" className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>
    
        {/* Repeat the block for the second image */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <a href="#link2">
            <img src={"https://source.unsplash.com/user/wsanter"} alt="" className="w-full" />
        </a>
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>
        
        {/* Repeat the block for the third image */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/900x700/?fruit"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by Fruits
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        {/* Repeat the block for the third image */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/car"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>
        {/* 4 rows*/}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/300x300"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/marvel"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/pero"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/erer"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>
        {/* 4 rows*/}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/refefe"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/efecar"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/efefefezaf"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#link3">
            <img src={"https://source.unsplash.com/random/isfjsip"} alt="" className="w-full" />
            </a>
            <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by unsplash
            </div>
            <ul>
            <li><b>Views: 4000</b></li>
            <li><b>Downloads: 300</b></li>
            <li><b>Likes: 400</b></li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
            </span>
        </div>
        </div>
    </div>
    </div>
    
    );
}

export default Gallery;