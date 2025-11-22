import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type StatusType = "none" | "success" | "warning" | "danger";

interface ChecklistItemProps {
  id: number;
  description: string;
}

export const ChecklistItem = ({ id, description }: ChecklistItemProps) => {
  const [status, setStatus] = useState<StatusType>("none");

  const getItemClasses = () => {
    const baseClasses = "flex items-center justify-between p-4 rounded-lg transition-all duration-200 bg-card border";
    
    switch (status) {
      case "success":
        return cn(baseClasses, "border-status-success bg-status-success-bg");
      case "warning":
        return cn(baseClasses, "border-status-warning bg-status-warning-bg");
      case "danger":
        return cn(baseClasses, "border-status-danger bg-status-danger-bg");
      default:
        return cn(baseClasses, "border-border hover:border-primary/50");
    }
  };

  const getButtonClasses = (buttonStatus: StatusType) => {
    const isActive = status === buttonStatus;
    const baseClasses = "h-10 w-10 p-0 rounded-full transition-all";
    
    switch (buttonStatus) {
      case "success":
        return cn(
          baseClasses,
          isActive 
            ? "bg-status-success text-white shadow-md scale-110" 
            : "bg-status-success/20 text-status-success hover:bg-status-success/30"
        );
      case "warning":
        return cn(
          baseClasses,
          isActive 
            ? "bg-status-warning text-white shadow-md scale-110" 
            : "bg-status-warning/20 text-status-warning hover:bg-status-warning/30"
        );
      case "danger":
        return cn(
          baseClasses,
          isActive 
            ? "bg-status-danger text-white shadow-md scale-110" 
            : "bg-status-danger/20 text-status-danger hover:bg-status-danger/30"
        );
      default:
        return baseClasses;
    }
  };

  const handleStatusClick = (newStatus: StatusType) => {
    setStatus(status === newStatus ? "none" : newStatus);
  };

  return (
    <div className={getItemClasses()}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="text-sm font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-md shrink-0">
          {id}
        </span>
        <p className="text-sm font-medium text-foreground break-words">
          {description}
        </p>
      </div>
      
      <div className="flex items-center gap-2 ml-4 shrink-0">
        <Button
          onClick={() => handleStatusClick("success")}
          className={getButtonClasses("success")}
          aria-label="Mark as success"
        />
        <Button
          onClick={() => handleStatusClick("warning")}
          className={getButtonClasses("warning")}
          aria-label="Mark as warning"
        />
        <Button
          onClick={() => handleStatusClick("danger")}
          className={getButtonClasses("danger")}
          aria-label="Mark as danger"
        />
      </div>
    </div>
  );
};
