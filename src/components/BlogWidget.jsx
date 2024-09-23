import React from 'react'
import { useTranslation } from 'react-i18next';
import toggleLanguageStore from '../../zustand/language';

const BlogWidget = () => {
    const { t } = useTranslation();
    const { language } = toggleLanguageStore();

  return (
    <div className="flex flex-col px-10 h-52 mb-20 justify-evenly">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold text-primary">{t("blogwidgettitle")}</h2>
      </div>
      <div className="flex items-center justify-center">
        <h2 className='text-secondary text-sm font-semibold'>{t("comingsoon")}</h2>
      </div>
    </div>
  )
}

export default BlogWidget