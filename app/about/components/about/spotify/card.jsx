"use client";

import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./fetch";
import PlayingAnimation from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const glass = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.72)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.055), inset 0 1px 0 rgba(255,255,255,0.9)",
};

export default function Card() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await Promise.all([getNowPlayingItem()]);
      setResult(res[0]);
      setLoading(false);
    };
    fetchData();
    const id = setInterval(fetchData, 60_000);
    return () => clearInterval(id);
  }, []);

  if (loading) {
    return (
      <div className="w-full rounded-2xl p-4 flex items-center gap-3 animate-pulse" style={glass}>
        <div className="w-10 h-10 rounded-xl bg-slate-200" />
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-slate-200 rounded-full w-2/3" />
          <div className="h-3 bg-slate-100 rounded-full w-1/2" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl p-4 overflow-hidden" style={glass}>
      {/* Album art as faint background */}
      {result?.isPlaying && result?.albumImageUrl && (
        <Image
          src={result.albumImageUrl}
          alt="album art"
          fill
          className="object-cover opacity-10 z-0"
        />
      )}

      <div className="relative z-10 flex items-center gap-4">
        {/* Spotify icon */}
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shrink-0 shadow-sm">
          <FontAwesomeIcon icon={faSpotify} className="text-white text-lg" />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[0.62rem] uppercase tracking-widest font-bold text-slate-400 mb-0.5">
            {result?.isPlaying ? "Now Playing" : "Currently Offline"}
          </p>
          {result?.isPlaying ? (
            <>
              <a
                href={result.songUrl ? encodeURI(result.songUrl) : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 truncate block transition-colors"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {result.title}
              </a>
              <p className="text-xs text-slate-500 truncate">{result.artist}</p>
            </>
          ) : (
            <p className="text-sm font-semibold text-slate-500">Not listening right now</p>
          )}
        </div>

        {result?.isPlaying && <PlayingAnimation />}
      </div>
    </div>
  );
}