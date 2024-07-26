import "../App.css"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CommunityCare from "../assets/communitycare.png"
import Bloggy from "../assets/bloggy.png"
import GenerativeArt from "../assets/generative-art.png"

export default function BuildPage() {


    return (
        <>
            <div className="flex flex-col gap-10 h-full w-full items-center justify-center">
                <section className="flex flex-col md:flex-row md:gap-20 justify-center items-center w-full">
                    <Carousel orientation="horizontal" className="w-2/3 md:w-1/2 ">
                        <CarouselContent >
                            <CarouselItem>
                                <Card>
                                    <CardHeader>
                                        <img src={CommunityCare} alt="Community Care" className="mb-2" />
                                        <CardTitle>CommunityCare</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            Track the census of a community to effectively distribute the
                                            resources to each household. The software would help 10, 000+ community members to receive the optimal
                                            amount of goods, financial aids, etc. in case of community extensions, emergencies, and other related events.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>.
                                <Card>
                                    <CardHeader>
                                        <img src={Bloggy} alt="Bloggy" className="mb-2" />
                                        <CardTitle>Bloggy</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            Bloggy is a streamlined blogging platform designed to enhance community
                                            engagement with its intuitive WYSIWYG (What You See Is What You Get)
                                            editor. Ideal for users seeking a simple yet powerful blogging tool,
                                            Bloggy allows users to create and manage content effortlessly.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem>
                                <Card>
                                    <CardHeader>
                                        <img src={GenerativeArt} alt="Generative Art" className="mb-2" />
                                        <CardTitle>Generative Art</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            Generative Art is a sophisticated software application designed to celebrate
                                            the beauty of mathematics through the creation of stunning visual art.
                                            By leveraging trigonometric algorithms, this software transforms
                                            mathematical parameters into intricate and captivating images.
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </section >
            </div >
        </>
    )
}