//Taylor Zweigle, 2024
import React from "react";

import Badge from "../../core/badge/Badge";
import Typography from "../../core/typography/Typography";

import { months } from "../calendar/Calendar";

import { compareStartAndEndTimes, formatTime, getColors, getIcons } from "../../utility/utility";

const EventCard = ({ event, startTime, endTime, showStartDate, showEndDate, color, tag, badge }) => {
  const colors = getColors(color);
  const icon = getIcons(tag);

  return (
    <div className="relative">
      <div
        className={`flex flex-row justify-start items-center cursor-pointer h-14 ${colors.bg} ${colors.hover} ${colors.active} border ${colors.border} rounded-md overflow-clip px-2`}
      >
        {badge && <Badge size="large" />}
        <div className={`flex justify-center items-center ${colors.icon} rounded w-6 h-6`}>{icon}</div>
        <div className="flex flex-col gap-0 p-1 sm:p-2 line-clamp-1">
          <Typography variant="body2" color="custom" customColor={colors.icon} bold truncate>
            {event}
          </Typography>
          {!compareStartAndEndTimes(startTime, endTime) && (
            <Typography variant="caption" color="custom" customColor={colors.text} truncate>
              <span className="inline-flex justify-start items-center gap-1">
                {showStartDate && (
                  <span>{`${months[startTime.getMonth()].slice(0, 3)} ${startTime.getDate()}`}</span>
                )}
                <span>{`${formatTime(startTime)} -`}</span>
                {showEndDate && (
                  <span>{`${months[endTime.getMonth()].slice(0, 3)} ${endTime.getDate()}`}</span>
                )}
                <span>{formatTime(endTime)}</span>
              </span>
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
