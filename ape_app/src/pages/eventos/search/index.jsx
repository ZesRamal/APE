import NavBar from '../../navbar/navbar';
import SearchBar from '../../components/searchBar';
import TournamentListing from '../../components/tournamentListing';
import TournamentScroller from '../../components/tournamentScroller';
import GliderControls from '../../components/gliderControls';
import GliderContain from '../../components/gliderContain';
import GliderDragable from '../../components/gliderDragable';
import GliderTrack from '../../components/gliderTrack';
import React from 'react'
import SearchImages from '../../components/searchImages';

const searchEvents = () => {
    
    return(
        <div className="box-border *:before:*:after">
            <NavBar>Buscar Eventos</NavBar>
            <div className='searchBarContainer'>
                <SearchBar/>
            </div>
            <div className='eventPerCategoryContainer flex flex-col'>
                <div className='flex flex-row justify-center px-1'>
                    <div className='searchTitleSection px-2 py-2'>
                        Todo
                    </div>
                    <div className='searchTitleSection px-2 py-2'>
                        Eventos de hoy
                    </div>
                    <div className='searchTitleSection px-2 py-2'>
                        Torneos
                    </div>
                    <div className='searchTitleSection px-2 py-2'>
                        Platicas
                    </div>
                </div>
                <div className='blackBar'></div>
                <TournamentListing>
                <section className=' bg-white'>
                    <div className=' pt-0 mx-4 my-0 overflow-hidden max-w-[1260px]'>
                        <div className='tournamentScrollerSearch'>
                        <div role='group' aria-labelledby='18'>
                            <div className='flex justify-between items-center flex-wrap'>
                                <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Eventos de hoy</h2>
                            </div>
                            <GliderControls>
                            <GliderContain>
                                <GliderDragable>
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
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    
                                </GliderTrack>
                            </GliderDragable>
                            </GliderContain>
                            </GliderControls>
                        </div>
                        </div>
                        <div className='tournamentScrollerSearch'>
                            <div role='group' aria-labelledby='18'>
                                <div className='flex justify-between items-center flex-wrap'>
                                    <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Torneos</h2>
                                </div>
                                <GliderControls>
                                <GliderContain>
                                    <GliderDragable>
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
                                        <SearchImages>
                                        <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                        </SearchImages>
                                        
                                    </GliderTrack>
                                </GliderDragable>
                                </GliderContain>
                                </GliderControls>
                            </div>
                        </div>
                        
                        <div className='tournamentScrollerSearch'> 
                        <div role='group' aria-labelledby='18'>
                            <div className='flex justify-between items-center flex-wrap'>
                                <h2 className='pl-2 my-4 text-base sm:text-[24px] leading-5 text-black font-bold '>Platicas</h2>
                            </div>
                            <GliderControls>
                            <GliderContain>
                                <GliderDragable>
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
                                    <SearchImages>
                                    <img alt="Super Smash Bros. Ultimate" profiletype="videogame" srcset="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 1x, https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0 2x" src="https://www.bing.com/th?pid=Sgg&amp;qlt=100&amp;u=https%3A%2F%2Fimages.start.gg%2Fimages%2Fvideogame%2F1386%2Fimage-d24f740623a31f9e1eec2aabc30f4ba2-optimized.jpg&amp;ehk=Cv4voljXe9IIL1YmYNqg162zjL1hDYQvuyujRyflMX4%3D&amp;w=140&amp;r=0" decoding="async" data-nimg="intrinsic" className='imageSearchSection'></img>
                                    </SearchImages>
                                    
                                </GliderTrack>
                            </GliderDragable>
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