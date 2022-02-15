import logoimage from '../images/fullEnergyLogo.png';

function Footer(){
    return(
        <footer id="contact" class="bg-white">
        <div class="container mx-auto px-8">
          <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
                          <div className="max-w-18" >
              <a >
                  <img class="object-contain  w-40" src={logoimage} />

             </a>
            </div>            </div>


            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Social</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <p class="uppercase text-gray-500 md:mb-6">Contact</p>
              <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <p class="no-underline hover:underline text-gray-800 hover:text-pink-500">salma.djadi@epitech.eu</p>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <p class="no-underline hover:underline text-gray-800 hover:text-pink-500">mario.rubio@epitech.eu</p>
                </li>            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                  <p class="no-underline hover:underline text-gray-800 hover:text-pink-500">cristian.romero@epitech.eu</p>
                </li>
              </ul>

            </div>
          </div>
        </div>
        
        <a href="https://www.freepik.com/free-photos-vectors/background" class="text-gray-500">Copirit</a>
      </footer>
    )
};
export default Footer;