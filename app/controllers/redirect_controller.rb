class RedirectController < ApplicationController

  def index
    gon.uuid = params[:uuid]
    render if request_from_mobile?
  end

  private

  def request_from_mobile?
    user_agent = parse_user_agent(request.user_agent)
    platform = user_agent.platform
    if platform == "iPhone" || platform == "iPad" || platform == "iPod" 
      true
    else
      false
    end
  end

  def parse_user_agent(user_agent)
    UserAgent.parse(user_agent)
  end

end
