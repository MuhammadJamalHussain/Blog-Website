import Link from "next/link";
import Image from "next/image";




export default function Home() {
  return (
  <div className="parentContainer">
      <div className="childContainer">


        <div className="imageContainer">
          <Image src="/AI.jfif" alt="Artificial Intelligence" className="ImageSize" />
        </div>
        <h1 className="title"> Artificial Intelligence (AI) and Machine Learning (ML) </h1>
        <p className="description">
        Applications: Used in industries like healthcare (diagnostics), finance (fraud detection), retail (personalized recommendations), and more.
        </p>
        <button className="readMore"><Link href="/blog/blog1">Read More</Link></button>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <Image src="/Cs.jfif" alt="Cybersecurity" className="ImageSize" />
        </div>
        <h1 className="title"> Cybersecurity </h1>
        <p className="description">
        Threat Detection: Uses AI to identify unusual activities and detect potential cyber threats in real-time.
Zero Trust Architecture: A security model that requires strict identity verification for every person and device attempting
        </p>
        <button className="readMore"><Link href="/blog/blog2">Read More</Link></button>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <Image src="/BCW2.jfif" alt="Blockchain" className="ImageSize" />
        </div>
        <h1 className="title"> Blockchain and Web3 Technologies </h1>
        <p className="description">
        Decentralized Finance (DeFi): Uses blockchain to offer financial services without traditional intermediaries like banks.
Smart Contracts: Self-executing contracts with terms written
        </p>
        <button className="readMore"><Link href="/blog/blog3">Read More</Link></button>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <Image src="/CC2.jfif" alt="Cloud Computing" className="ImageSize" />
        </div>
        <h1 className="title"> Cloud Computing and Edge Computing </h1>
        <p className="description">
        Cloud Services: Includes Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).
Hybrid Cloud Solutions: Combine private and public cloud
        </p>
        <button className="readMore"><Link href="/blog/blog4">Read More</Link></button>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <Image src="/QC.jfif" alt="Quantum Computing" className="ImageSize" />
        </div>
        <h1 className="title"> Quantum Computing </h1>
        <p className="description">
        Qubits: Uses quantum bits (qubits) that can represent multiple states simultaneously, unlike classical binary bits.
Applications: Expected to revolutionize areas like cryptography, materials science, pharmaceuticals, and logistics.
        </p>
        <button className="readMore"><Link href="/blog/blog5">Read More</Link></button>
      </div>
      <div className="childContainer">
        <div className="imageContainer">
          <Image src="/ER.jfif" alt="Extended Reality" className="ImageSize" />
        </div>
        <h1 className="title"> Extended Reality (XR) — AR, VR, and MR </h1>
        <p className="description">
        Augmented Reality (AR): Enhances the real-world environment with digital overlays, used in apps like Pokémon Go and industrial training tools.
Virtual Reality (VR): Provides immersive digital experiences,
        </p>
        <button className="readMore"><Link href="/blog/blog6">Read More</Link></button>
      </div>
    </div>
  );
}
