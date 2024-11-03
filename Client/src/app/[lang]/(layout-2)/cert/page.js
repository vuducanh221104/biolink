import CertHome from '../../../../appLayout/CertHome';
import { getDictionary } from '../../dictionaries';

export default async function Page({ params }) {
    const lang = await params?.lang;

    const dict = await getDictionary(lang);

    return <CertHome dict={dict} lang={lang} />;
}
