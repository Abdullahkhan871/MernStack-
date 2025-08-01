import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';

interface AudioPlayerProps {
    duration?: number;
    className?: string;
}

const VoiceNote: React.FC<AudioPlayerProps> = ({
    duration = 75, // 1:15 in seconds
    className = ""
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);

    // Generate waveform bars with varying heights
    const generateWaveform = () => {
        const bars = [];
        const numBars = 40;

        for (let i = 0; i < numBars; i++) {
            const height = Math.random() * 20 + 4; // Random height between 4px and 24px
            const isActive = i / numBars <= progress;

            bars.push(
                <div
                    key={i}
                    className={`w-0.5 transition-colors duration-150 ${isActive
                        ? 'bg-teal-600'
                        : 'bg-gray-300'
                        }`}
                    style={{ height: `${height}px` }}
                />
            );
        }
        return bars;
    };

    // Format time as MM:SS
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Handle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Simulate audio progress
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isPlaying && currentTime < duration) {
            interval = setInterval(() => {
                setCurrentTime(prev => {
                    const newTime = prev + 0.1;
                    setProgress(newTime / duration);
                    return newTime;
                });
            }, 100);
        } else if (currentTime >= duration) {
            setIsPlaying(false);
            setCurrentTime(0);
            setProgress(0);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, currentTime, duration]);

    // Handle waveform click for scrubbing
    const handleWaveformClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const newProgress = clickX / rect.width;
        const newTime = newProgress * duration;

        setProgress(newProgress);
        setCurrentTime(newTime);
    };

    return (
        <div className={`flex items-center gap-3 bg-white rounded-lg ${className}`}>
            {/* Play/Pause Button */}
            <button
                onClick={togglePlayPause}
                className="flex items-center justify-center w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200 text-white"
            >
                {isPlaying ? (
                    <Pause className="w-4 h-4" />
                ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                )}
            </button>

            {/* Current Time */}
            <span className="text-sm font-medium text-gray-700 min-w-[35px]">
                {formatTime(currentTime)}
            </span>

            {/* Waveform */}
            <div
                className="flex items-center gap-0.5 h-8 flex-1 cursor-pointer px-2"
                onClick={handleWaveformClick}
            >
                {generateWaveform()}
            </div>

            {/* Total Duration */}
            <span className="text-sm font-medium text-gray-700 min-w-[35px]">
                {formatTime(duration)}
            </span>
        </div>
    );
};

export default VoiceNote;