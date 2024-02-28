import { useLocation } from "react-router-dom";
import Markdown from "react-markdown";
import { PROJECT_LIST } from "../../constants";
import { useEffect, useState } from "react";
import { Images, SwipeCarousel } from "../../components/carousel";
import { TechTile } from "../../components/tags/TechTile";

export const ProjectPage = () => {
  const location = useLocation();
  const [md, setMd] = useState<string>("");
  const project = PROJECT_LIST.find(
    (proj) => proj.id === location.pathname.split("/")[2]
  );

  useEffect(() => {
    if (project !== undefined) {
      fetch(`/projects/${project.id}.md`)
        .then((res) => res.text())
        .then((text) => setMd(text));
    }
  }, [project, project?.md]);

  console.log(location.pathname);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="prose flex flex-col w-1/2">
          <h3 className="font-bold text-text">{project?.title}</h3>
          <div className="not-prose flex flex-col overflow-x-hidden w-[600px] self-center">
            {project?.imgs ? (
              <SwipeCarousel imgList={project.imgs}>
                <Images size="md" />
              </SwipeCarousel>
            ) : (
              <img className="aspect-video w-full rounded" src={project?.img} />
            )}
          </div>
          {project?.md && (
            <div>
              <Markdown
                className={"text-text"}
                children={md}
                components={{
                  img: (props) => {
                    const { ...rest } = props;
                    return (
                      <img className="aspect-video w-full rounded" {...rest} />
                    );
                  },
                  h3: (props) => {
                    const { children, ...rest } = props;
                    return (
                      <h3 className="text-text" {...rest}>
                        {children}
                      </h3>
                    );
                  },
                }}
              />
            </div>
          )}
          <div className="flex flex-col text-text mb-[100px]">
            <p className="font-bold">Built with:</p>
            <div className="inline-flex gap-3">
              {project?.stack.map((lang) => (
                <TechTile key={lang.title} lang={lang} size="lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
