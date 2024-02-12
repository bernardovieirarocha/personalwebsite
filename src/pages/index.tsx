
import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { SocialLink } from '../components/SocialLink';
import { About, Name, SocialMedia } from '../data/lifeApi';

export default function Home() {
  return (
    <>
      
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* <div className="flex flex-col gap-16">
             Used to be notion connection
          </div> */}
          <div className="lg:ml-auto space-y-10 lg:pl-16 xl:pl-24">
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </>
  );
}
