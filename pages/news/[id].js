import Layout from "../../components/Layout";
import { getAllNewsIds, getNewData } from "../../lib/news";
import cn from "classnames";
import Head from "next/head";
import Date from "../../components/Date";
import styles from "./id.module.css";
import Breadcrumb from "../../components/Breadcrumb";
import Link from "next/link";
import Icon from "../../components/Icon";

export async function getStaticPaths() {
  const paths = getAllNewsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const newData = await getNewData(params.id);

  return {
    props: {
      newData,
    },
  };
}

const New = ({ newData }) => {
  return (
    <Layout>
      <Head>
        <title>{newData.title}</title>
      </Head>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.content}>
            <div className={styles.breadcrumb}>
              <Link href="/">
                <a className={cn("hairline-small", styles.breadcrumb_text)}>
                  HOME
                </a>
              </Link>
              <Icon name="arrow-right" />
              <p className={cn("hairline-small", styles.breadcrumb_tag)}>
                {newData.tag}
              </p>
              <Icon name="arrow-right" />
              <p className={cn("hairline-small", styles.breadcrumb_title)}>
                {newData.intro}
              </p>
            </div>

            <h1 className={cn("h2", styles.title)}>{newData.title}</h1>
            <div className={styles.breadcrumb}>
              <Link href="/">
                <a className={cn("hairline-small", styles.author)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#23262F" />
                    <rect
                      x="8"
                      y="8"
                      width="8"
                      height="8"
                      rx="4"
                      fill="#FCFCFD"
                    />
                  </svg>
                  URIOSTEGUI
                </a>
              </Link>
              /
              <Date dateString={newData.date} />/
              <p className={cn("hairline-small", styles.author)}>
                {newData.tag}
              </p>
            </div>
            <div className={styles.image_container}>
              <img className={styles.image} src={newData.image} />
            </div>
            <div
              className={cn("caption", styles.contentHtml)}
              dangerouslySetInnerHTML={{ __html: newData.contentHtml }}
            />
          </div>

          <div>
            <h1>Title</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default New;
