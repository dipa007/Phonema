import { quickActions } from "../data/quick-actions";
import { QuickActionCard } from "./quick-action-card";

export function QuickActionPanel(){
    return(
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Quick actions</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {
                    quickActions.map((qa)=>(
                        <QuickActionCard
                        key={qa.title}
                        title={qa.title}
                        description={qa.description}
                        gradient={qa.gradient}
                        href={qa.href}
                        />
                    ))
                }
            </div>
        </div>
    )
}