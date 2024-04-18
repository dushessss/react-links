import React from 'react';
import photo from './img/photo.jpg'

const App = () => {
    return (
        <div className={"bg-[#1f1f1f] rounded-2xl p-[42px] max-w-[385px] w-full mx-[24px]"}>
            <section className={"text-white flex flex-col items-center"}>
                <img src={photo} alt="me" className={'w-20 rounded-full'}/>
                <h1 className={'mt-[24px] text-[1.65rem]'}>Andrew Cheremisin</h1>
                <h2 className={"text-primary-100 mt-1 font-semibold"}>Ashqelon, Israel</h2>
                <p className={'mt-[20px]'}>"Just a random guy"</p>
            </section>
            <section className={"flex flex-col text-white mt-[24px]"}>
                <button onClick={()=> window.open('https://vk.com/invalidandrew','_blank')}
                    className={"bg-[#333333] mb-[15.4px] w-full h-[2.9rem] rounded-[0.5rem] hover:bg-accent-100 hover:text-black"}>VK
                </button>
                <button onClick={()=> window.open('https://steamcommunity.com/id/dushesssss', '_blank')}
                    className={"bg-[#333333] mb-[15.4px] w-full h-[2.9rem] rounded-[0.5rem] hover:bg-accent-100 hover:text-black"}>Steam
                </button>
                <button onClick={()=>window.open('https://t.me/dushessss123', '_blank')}
                    className={"bg-[#333333] mb-[15.4px] w-full h-[2.9rem] rounded-[0.5rem] hover:bg-accent-100 hover:text-black"}>Telegram
                </button>
                <button onClick={()=>window.open('https://settings.gg/player/1154943598','_blank')}
                    className={"bg-[#333333] mb-[15.4px] w-full h-[2.9rem] rounded-[0.5rem] hover:bg-accent-100 hover:text-black"}>Settings
                </button>
                <button onClick={() => window.open('https://www.faceit.com/ru/players/dushesssss','_blank')}
                    className={"bg-[#333333] w-full h-[2.9rem] rounded-[0.5rem] hover:bg-accent-100 hover:text-black"}>FaceIt
                </button>
            </section>
        </div>
    );
};

export default App;