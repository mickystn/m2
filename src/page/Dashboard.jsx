
import Topbar from '../component/Topbar/Topbar'


export default function Dashboard() {
    return (
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <Topbar name="Dashboard"/>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
          className="bg-white rounded-md p-5 justify-center gap-4 mt-3"
        >
          <div className="flex flex-col gap-2 w-[150px]">
            <p className="text-xs">Business Unit</p>
            <select className="px-3 py-1 rounded-md border border-gray-100"></select>
          </div>
          <div className="flex flex-col gap-2 w-[150px]">
            <p className="text-xs">Company</p>
            <select className="px-3 py-1 rounded-md border border-gray-100"></select>
          </div>
          <div className="flex flex-col gap-2 w-[150px]">
            <p className="text-xs">Department</p>
            <select className="px-3 py-1 rounded-md border border-gray-100"></select>
          </div>
          <div className="flex flex-col gap-2 w-[150px]">
            <p className="text-xs">Username</p>
            <input className="px-3 py-1 rounded-md border border-gray-100" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <p className="font-bold text-xs w-[50px]">Years</p>
              <div className="flex flex-row items-center gap-1">
                <input
                  placeholder="Start"
                  className="px-3 py-1 rounded-md border border-gray-100 w-[100px]"
                />
                <div className="w-[25px] h-[1.5px] bg-black "></div>
                <input
                  placeholder="End"
                  className="px-3 py-1 rounded-md border border-gray-100 w-[100px]"
                />
                <button className="text-gray-500 bg-blue-100 px-3 rounded-md py-1 w-[100px]">
                  Search
                </button>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <p className="font-bold text-xs  w-[50px]">Months</p>
              <div className="flex flex-row items-center gap-1">
                <input
                  placeholder="Start"
                  className="px-3 py-1 rounded-md border border-gray-100 w-[100px]"
                />
                <div className="w-[25px] h-[1.5px] bg-black "></div>
                <input
                  placeholder="End"
                  className="px-3 py-1 rounded-md border border-gray-100 w-[100px]"
                />
                <button className="text-gray-500 bg-gray-200 px-3 rounded-md py-1  w-[100px]">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='p-5'>
            <p className="font-bold">Summary Task List</p>
            <div className="w-full flex grid grid-cols-6 gap-2">
            <div className="rounded-md col-span-1 flex flex-col items-center px-5 py-2 text-white font-bold bg-[#a51c1c]">
                <p className="text-xs text-start w-full">TOS</p>
                <p className="text-4xl">177</p>
            </div>
            <div className="rounded-md col-span-1 flex flex-col items-center px-5 py-2 text-white font-bold bg-[#e42525]">
                <p className="text-xs text-start w-full">PO</p>
                <p className="text-4xl">167</p>
            </div>
            <div className="rounded-md col-span-1 flex flex-col items-center px-5 py-2 text-white font-bold bg-[#ee9d10]">
                <p className="text-xs text-start w-full">Shipment</p>
                <p className="text-4xl">798</p>
            </div>
            <div className="rounded-md col-span-1 flex flex-col items-center px-5 py-2 text-white font-bold bg-[#eec524]">
                <p className="text-xs text-start w-full">Claim (over 30 days)</p>
                <p className="text-4xl">328</p>
            </div>
            {/* <div className="rounded-md col-span-2 flex flex-col items-center px-5 py-2 text-white font-bold ">
                <p className="text-xs text-start w-full">Claim (over 30 days)</p>
                <p className="text-4xl">328</p>
            </div> */}
            </div>
        </div>
      </div>
    );
  }