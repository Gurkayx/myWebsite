import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import toggleLanguageStore from "../../zustand/language";
import { FaCopy } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const GithubWidget = ({ userdata, repos }) => {
  const { t } = useTranslation();
  const { language } = toggleLanguageStore();
  const [filterRepo, setFilterRepo] = useState([]);

  useEffect(() => {
    const filteredData = repos.filter((repo) => repo.id !== 818361553);
    setFilterRepo(filteredData);
  }, [repos]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast(t("copytoclipboard"),{
        position:"bottom-center"
    });
  };

  return (
    <div id="githubarea" className="mt-10 flex flex-col md:flex-row justify-center w-full p-10">
      <div className="w-full flex flex-col justify-center items-center bg-secondary/10 p-10">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-primary">{t("githubwidgettitle")}</h2>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-10">
            <img
              src={userdata?.avatar_url}
              alt="github profile image"
              className="w-52 h-52 rounded-3xl"
            />
            <div>
              <h3 className="text-2xl font-bold">{userdata?.name}</h3>
              <a
                href={userdata?.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-bold underline hover:text-warning block">
                  {userdata?.login}
                </h3>
              </a>
              <h3 className="text-sm font-bold mt-2">{userdata?.bio}</h3>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="mt-6 mb-10">
            <h2 className="text-3xl font-bold text-primary">{t("projects")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filterRepo.map((item, index) => (
              <div
                key={item.id}
                className="p-5 bg-secondary/10 flex flex-col gap-5 hover:bg-secondary/20 transition-colors"
              >
                <a target="_blank" href={item.svn_url} key={index}>
                  <p className="text-secondary font-bold text-xl">{item.name}</p>
                </a>
                <p className="text-sm font-semibold">{item.description}</p>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <code className="text-sm">{item.clone_url}</code>
                  <button
                    onClick={()=>{copyToClipboard(item.clone_url)}}
                    className="btn btn-ghost"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubWidget;
