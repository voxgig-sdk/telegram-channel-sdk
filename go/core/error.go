package core

type TelegramChannelError struct {
	IsTelegramChannelError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTelegramChannelError(code string, msg string, ctx *Context) *TelegramChannelError {
	return &TelegramChannelError{
		IsTelegramChannelError: true,
		Sdk:              "TelegramChannel",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TelegramChannelError) Error() string {
	return e.Msg
}
