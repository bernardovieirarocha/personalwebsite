
import { PageLayout } from '../../components/PageLayout';


interface Props {
  tag: string;
}

export default function Tag({ tag }: Props) {
  return (
    <>
      <PageLayout title="Tags" intro={`All the articles from #${tag}`}>
        <div className="mt-24 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          {/* <div className="flex max-w-3xl flex-col space-y-16">
            
          </div> */}
        </div>
      </PageLayout>
    </>
  );
}