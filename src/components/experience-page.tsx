import "../App.css"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ExperiencePage() {

    return (
        <>
            <div className="flex flex-col gap-10 h-full w-full items-center justify-center">
                <section className="flex flex-col md:flex-row md:gap-20 justify-center items-center md:w-1/2">
                    <Card className="h-[32rem] overflow-y-scroll">
                        <CardHeader>
                            <CardTitle className="sr-only">Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="flex flex-col gap-16">
                                <div className="flex flex-col gap-5">
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" >SOFTWARE ENGINEERING FELLOW @ HEADSTARTER AI</h4>
                                    <p>2024-Present</p>
                                    <p>Task to create five AI projects, where my final project will focus on securing 1000 people on the
                                        waitlist,
                                        1000 user accounts, or $1000 in revenue. Will have the chance to enhance my skills in personal
                                        branding,
                                        interview preparation, teamwork, and presentation.</p>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" >Student Researcher @ GORDON COLLEGE</h4>
                                    <p>2024-Present</p>
                                    <p>Developer of a software that would track the census of a community to effectively distribute
                                        the
                                        resources to each household. The software would help 10, 000+ community members to receive the
                                        optimal
                                        amount of goods, financial aids, etc. in case of community extensions, emergencies, and other
                                        related events.</p>
                                </div>
                            </CardDescription>
                        </CardContent>
                    </Card>
                </section >
            </div >
        </>
    )
}