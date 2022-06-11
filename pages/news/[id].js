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
                {newData.title}
              </p>
            </div>

            <h1 className={cn("h2", styles.title)}>{newData.title}</h1>
            <div className={styles.image_container}>
              <img className={styles.image} src={newData.image} />
            </div>
            <Date dateString={newData.date} />
            <div dangerouslySetInnerHTML={{ __html: newData.contentHtml }} />
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
