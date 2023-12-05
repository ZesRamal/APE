import NavBar from '../../../navbar/navbar';
import SearchBar from '../../../components/searchBar';
import TournamentListing from '../../../components/tournamentListing';
import GliderControls from '../../../components/gliderControls';
import GliderContain from '../../../components/gliderContain';
import GliderTrack from '../../../components/gliderTrack';
import React from 'react'
import Link from 'next/link'
import SearchImages from '../../../components/searchImages';

const searchEvents = () => {
    
    return(
        <div className="box-border *:before:*:after">
            <NavBar>Buscar Eventos</NavBar>
            <div className='searchBarContainer'>
                <SearchBar/>
            </div>
            <div className='eventPerCategoryContainer flex flex-col'>
                <div className='flex flex-row justify-center px-0'>
                <Link href="/eventos/search" className='ml-0'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>Todo</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/today'>
                            <div className='searchTitleSection'>
                                <span className='text-black'>Eventos de hoy</span>
                            </div>
                    </Link>
                    <Link href='/eventos/search/torneos'>
                        <div className='searchTitleSection'>
                            <span className='text-black'>Torneos</span>
                        </div>
                    </Link>
                    <Link href='/eventos/search/platicas'>
                        <div className='searchTitleSection'>
                            <span className='text-blue-500'>Platicas</span>
                        </div>
                    </Link>   
                    
                </div>
                <div className='blackBar'></div>
                <TournamentListing>
                <section className=' bg-white'>
                    <div className=' pt-0 mx-4 my-0 overflow-hidden max-w-[1260px]'>
                        <div className='tournamentScrollerSearch'>
                        <div role='group' aria-labelledby='18'>
                            <div className='flex justify-between items-center flex-wrap'>
                                <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Platicas</h2>
                            </div>
                            <GliderControls>
                            <GliderContain>
                                <div className='image-grid'>
                                <GliderTrack>
                                    {/* Boxes de eventos */}
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                </GliderTrack>
                                <GliderTrack>
                                    {/* Boxes de eventos */}
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                </GliderTrack>
                                <GliderTrack>
                                    {/* Boxes de eventos */}
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                </GliderTrack>
                                <GliderTrack>
                                    {/* Boxes de eventos */}
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                </GliderTrack>
                            </div>
                            </GliderContain>
                            </GliderControls>
                        </div>
                        </div>
                    </div>
                </section>
                </TournamentListing>
            </div>
        </div>
    )
}
export default searchEvents;