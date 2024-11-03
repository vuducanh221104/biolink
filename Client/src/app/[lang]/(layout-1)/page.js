import PageHome from '../../../appLayout/PageHome';
import { getDictionary } from '../dictionaries';

export default async function Page({ params }) {
    const { lang } = await params;

    const dict = await getDictionary(lang);

    return <PageHome dict={dict} lang={lang} />;
}
