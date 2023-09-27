import React from 'react';

const dummyData = [
    {
        name: 'Item 1',
        title: "Design",
        image: 'https://images.unsplash.com/photo-1684158100445-8e6926faf964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Item 2',
        title: "Marketing",
        image: 'https://images.unsplash.com/photo-1665783734550-ca8e1868a867?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Item 3',
        title: "Branding",
        image: 'https://images.unsplash.com/photo-1665783734550-ca8e1868a867?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Item 4',
        title: "Development",
        image: 'https://images.unsplash.com/photo-1693924614710-fb0a4865cffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    // Add more dummy data as needed
];

const rightData = [
    {
        name: 'Item 5',
        title: "Website Development",
        image: 'https://images.unsplash.com/photo-1693895786325-d7ac2125c6ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Item 6',
        title: "Branding",
        image: 'https://images.unsplash.com/photo-1653664988902-dfb59391af3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Item 7',
        title: "Design",
        image: 'https://images.unsplash.com/photo-1693705969271-f102327fce79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        name: 'Item 8',
        title: "Marketing",
        image: 'https://images.unsplash.com/photo-1693837107981-82153aa426ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
]

const Page = () => {
    return (
        <div className='bg-black min-h-screen md:p-[5rem] sm:p-[2rem] max-sm:p-[2rem]'>
            <h1 className='text-white font-black uppercase'>Works</h1>
            <div className="work-gallery mt-[5rem] sm:flex-col md:flex-row max-sm:flex-col" >
                <div className="left-work sm:gap-y-3 max-sm:gap-y-5">
                    {
                        dummyData.map((work) => (
                            <div className='flex flex-col gap-y-2'>
                                <div className="left-work-one ">
                                    <img src={work.image} />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <h5>{work.name}</h5>
                                    <h5 className='text-white'>{work.title}</h5>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="right-work sm:gap-y-3 max-sm:gap-y-5">
                    {
                        rightData.map((work) => (
                            <div className='flex flex-col gap-y-2'>
                                <div className="right-work-one  ">
                                    <img src={work.image} />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <h5>{work.name}</h5>
                                    <h5 className='text-white'>{work.title}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        //     <div className='bg-black min-h-screen p-[5rem]'>
        //     <h1 className='text-white font-black uppercase'>Works</h1>
        //     <div className="work-gallery mt-[5rem]" >
        //         <div className="left-work">
        //             {
        //                 dummyData.map((work) => (
        //                     <>
        //                         <div className="left-work-one">
        //                             <img src={work.image} />
        //                         </div>
        //                         <div>
        //                             <h5>{work.name}</h5>
        //                             <h4>{work.title}</h4>
        //                         </div>
        //                     </>
        //                 ))
        //             }

        //         </div>
        //         <div className="right-work">
        //             {
        //                 rightData.map((work) => (
        //                     <>
        //                     <div className="right-work-one">
        //                         <img src={work.image} />

        //                     </div>
        //                      <h5>{work.name}</h5>
        //                      <h4>{work.title}</h4>
        //                      </>
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </div>
    );
}

export default Page;
