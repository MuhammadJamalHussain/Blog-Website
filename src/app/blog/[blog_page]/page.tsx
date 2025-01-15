import Image from "next/image";

export default function blogPage({params}:any){


    const blogs : {
        name :string;
        image : any;
        description : string;
    }[] = [
        {
        name : "Blog1",
        image : <Image src="/images/AI2.jfif" alt="data" width={800} height={500} style={{margin:"150px", borderRadius: "20px"}}/>,
        description : "Applications: Used in industries like healthcare (diagnostics), finance (fraud detection), retail (personalized recommendations), and more. Generative AI: Technologies like ChatGPT, DALL·E, and Midjourney create text, images, and music, expanding creative possibilities. Deep Learning: Focuses on neural networks that mimic the human brain, widely used in tasks like image recognition and autonomous driving. AI Ethics: Addresses issues like bias in AI algorithms, transparency, data privacy, and the impact on jobs." 
        },
        {
        name : "Blog2",
        image : <Image src="/images/CS2.jfif" alt="CS" width={800} height={500} style={{margin:"150px", borderRadius: "20px"}} />,
        description : "Threat Detection: Uses AI to identify unusual activities and detect potential cyber threats in real-time. Zero Trust Architecture: A security model that requires strict identity verification for every person and device attempting to access resources. Cryptography: Continues to evolve with encryption methods to protect sensitive data. Ethical Hacking: Professionals identify vulnerabilities in systems and networks to secure them from attacks."
        },
        {
        name : "Blog3",
        image : <Image src="/images/BCW.jfif" alt="BlockChain" width={800} height={500} style={{  margin:"150px", borderRadius: "20px"}} />,
        description : "Decentralized Finance (DeFi): Uses blockchain to offer financial services without traditional intermediaries like banks. Smart Contracts: Self-executing contracts with terms written into code, enabling automation in various industries. NFTs (Non-Fungible Tokens): Digital assets representing ownership of unique items, gaining popularity in art, gaming, and collectibles. Data Ownership: Web3 technologies prioritize giving users control over their own data and digital identity."
        },
        {
        name : "Blog4",
        image : <Image src="/images/CC.png" alt="CC" width={800} height={500} style={{  margin:"150px", borderRadius: "20px"}} />,
        description : "Cloud Services: Includes Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Hybrid Cloud Solutions: Combine private and public cloud environments for greater flexibility and data management. Edge Computing: Reduces latency by processing data locally on devices or at nearby servers, crucial for IoT applications like smart cities and autonomous vehicles. Scalability: Enables businesses to scale resources up or down based on demand, optimizing costs."
        },
        {
         name : "Blog5",
         image : <Image src="/images/QC2.jfif" alt="QC" width={800} height={500} style={{  margin:"150px", borderRadius: "20px"}} />,
         description : "Qubits: Uses quantum bits (qubits) that can represent multiple states simultaneously, unlike classical binary bits. Applications: Expected to revolutionize areas like cryptography, materials science, pharmaceuticals, and logistics. Quantum Supremacy: Refers to a quantum computer’s ability to solve problems that classical computers cannot. Challenges: Includes issues like error rates, stability, and the high cost of developing quantum computers."
        },
        {
        name : "Blog6",
        image : <Image src="/images/ER2.jfif" alt="ER" width={800} height={500} style={{  margin:"150px", borderRadius: "20px"}} />,
        description : "Augmented Reality (AR): Enhances the real-world environment with digital overlays, used in apps like Pokémon Go and industrial training tools. Virtal Reality (VR): Provides immersive digital experiences, primarily used in gaming, simulations, and virtual meetings. Mixed Reality (MR): Blends physical and digital worlds, allowing interaction with digital objects in real-time within the physical environment. Metaverse: Envisions a virtual universe where users can socialize, work, and play in immersive digital spaces, combining AR, VR, and blockchain technology."
        },
     
        ]

function findBlog(blog_url: string){
    return blogs.find(blog => blog.name.toLowerCase() == blog_url.toLowerCase())
};

let blogOutput = findBlog(params.blog_page)


    return(
        <div>
            {
                blogOutput ? (
                    <div>
                         <h1>BLOG : {blogOutput.name}</h1>
                        <h2>IMAGE {blogOutput.image}</h2>
                        <p>Description {blogOutput.description}</p>
                    </div>
                ) : (
                    <h1>BLOG NOT FOUND</h1>
                )
            }
        </div>
    )
}