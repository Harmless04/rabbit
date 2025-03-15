import {TbBrandMeta} from "react-icons/tb";
import {IoLogoInstagram} from "react-icons/io";
import {RiTwitterXLine} from "react-icons/ri";
const Topbar = () => {
  return (
    <div className="bg-[#ea2e0e] text-white">
            <div className="container mx-auto">
             
                <div className="flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300"></a>
                    <TbBrandMeta className="h-5 w-5"/>
                    <a href="#" className="hover:text-gray-300"></a>
                    <IoLogoInstagram className="h-5 w-5"/>
                    <a href="#" className="hover:text-gray-300"></a>
                    <RiTwitterXLine className="h-4 w-4"/>
                </div>

            </div>
              <div className="text-sm text-center">
                <span>
                  We ship worldwide - Fast and Realiable Shipping!
                </span>
              </div>
                <div className="text-sm">
                  <a href="tel:+1234567890" className="hover:text-gray-300">
                    +1 (234) 567-890
                  </a>
                </div>

    </div>
  )
}

export default Topbar