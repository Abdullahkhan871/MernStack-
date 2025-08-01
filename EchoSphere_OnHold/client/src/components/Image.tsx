import React from 'react'

interface ImageProps {
    msg?: { images?: string[] };
}
const Image: React.FC<ImageProps> = ({ msg }) => {
    console.log(msg)
    return (
        <>
            {
                msg?.images?.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="relative">
                        <img className="w-30 h-30 bg-gray-200 rounded" src={img} />
                        {idx === 3 && msg.images!.length > 4 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded flex items-center justify-center text-white font-bold">
                                +{msg.images!.length - 4}
                            </div>
                        )}
                    </div>
                ))
            }
        </>
    )
}

export default Image