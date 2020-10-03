// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cosmos/msg_authorization/query.proto

package types

import (
	context "context"
	fmt "fmt"
	types "github.com/cosmos/cosmos-sdk/codec/types"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "github.com/regen-network/cosmos-proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// QueryAuthorizationRequest is the request type for the Query/Authorization RPC method.
type QueryAuthorizationRequest struct {
	GranterAddress string `protobuf:"bytes,1,opt,name=granter_address,json=granterAddress,proto3" json:"granter_address,omitempty"`
	GranteeAddress string `protobuf:"bytes,2,opt,name=grantee_address,json=granteeAddress,proto3" json:"grantee_address,omitempty"`
	// address defines the address to query for.
	MsgType *types.Any `protobuf:"bytes,3,opt,name=msg_type,json=msgType,proto3" json:"msg_type,omitempty"`
}

func (m *QueryAuthorizationRequest) Reset()         { *m = QueryAuthorizationRequest{} }
func (m *QueryAuthorizationRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAuthorizationRequest) ProtoMessage()    {}
func (*QueryAuthorizationRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_73cd34d3bc9b75c6, []int{0}
}
func (m *QueryAuthorizationRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAuthorizationRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAuthorizationRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAuthorizationRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAuthorizationRequest.Merge(m, src)
}
func (m *QueryAuthorizationRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAuthorizationRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAuthorizationRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAuthorizationRequest proto.InternalMessageInfo

// QueryAuthorizationResponse is the response type for the Query/Authorization RPC method.
type QueryAuthorizationResponse struct {
	// account defines the account of the corresponding address.
	Authorization *types.Any `protobuf:"bytes,1,opt,name=authorization,proto3" json:"authorization,omitempty"`
}

func (m *QueryAuthorizationResponse) Reset()         { *m = QueryAuthorizationResponse{} }
func (m *QueryAuthorizationResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAuthorizationResponse) ProtoMessage()    {}
func (*QueryAuthorizationResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_73cd34d3bc9b75c6, []int{1}
}
func (m *QueryAuthorizationResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAuthorizationResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAuthorizationResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAuthorizationResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAuthorizationResponse.Merge(m, src)
}
func (m *QueryAuthorizationResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAuthorizationResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAuthorizationResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAuthorizationResponse proto.InternalMessageInfo

func (m *QueryAuthorizationResponse) GetAuthorization() *types.Any {
	if m != nil {
		return m.Authorization
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryAuthorizationRequest)(nil), "cosmos.msg_authorization.QueryAuthorizationRequest")
	proto.RegisterType((*QueryAuthorizationResponse)(nil), "cosmos.msg_authorization.QueryAuthorizationResponse")
}

func init() {
	proto.RegisterFile("cosmos/msg_authorization/query.proto", fileDescriptor_73cd34d3bc9b75c6)
}

var fileDescriptor_73cd34d3bc9b75c6 = []byte{
	// 411 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x49, 0xce, 0x2f, 0xce,
	0xcd, 0x2f, 0xd6, 0xcf, 0x2d, 0x4e, 0x8f, 0x4f, 0x2c, 0x2d, 0xc9, 0xc8, 0x2f, 0xca, 0xac, 0x4a,
	0x2c, 0xc9, 0xcc, 0xcf, 0xd3, 0x2f, 0x2c, 0x4d, 0x2d, 0xaa, 0xd4, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x92, 0x80, 0xa8, 0xd2, 0xc3, 0x50, 0x25, 0x25, 0x92, 0x9e, 0x9f, 0x9e, 0x0f, 0x56, 0xa4,
	0x0f, 0x62, 0x41, 0xd4, 0x4b, 0x49, 0xa6, 0xe7, 0xe7, 0xa7, 0xe7, 0xa4, 0xea, 0x83, 0x79, 0x49,
	0xa5, 0x69, 0xfa, 0x89, 0x79, 0x50, 0xa3, 0xa4, 0x64, 0xa0, 0x52, 0x89, 0x05, 0x99, 0xfa, 0x89,
	0x79, 0x79, 0xf9, 0x25, 0x60, 0x73, 0x8a, 0x61, 0x1a, 0x21, 0x16, 0xc5, 0x43, 0x4c, 0x84, 0xda,
	0x0a, 0xe6, 0x28, 0x5d, 0x61, 0xe4, 0x92, 0x0c, 0x04, 0xb9, 0xc9, 0x11, 0xd9, 0x01, 0x41, 0xa9,
	0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x42, 0xea, 0x5c, 0xfc, 0xe9, 0x45, 0x89, 0x79, 0x25, 0xa9, 0x45,
	0xf1, 0x89, 0x29, 0x29, 0x45, 0xa9, 0xc5, 0xc5, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x7c,
	0x50, 0x61, 0x47, 0x88, 0x28, 0x42, 0x61, 0x2a, 0x5c, 0x21, 0x13, 0xb2, 0xc2, 0x54, 0x98, 0xc2,
	0x68, 0x2e, 0x0e, 0x90, 0x77, 0x4b, 0x2a, 0x0b, 0x52, 0x25, 0x98, 0x15, 0x18, 0x35, 0xb8, 0x8d,
	0x44, 0xf4, 0x20, 0x6e, 0xd7, 0x83, 0x79, 0x4b, 0xcf, 0x31, 0xaf, 0xd2, 0x49, 0xeb, 0xd4, 0x16,
	0x5d, 0xb5, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0xa8, 0xa3, 0xa1, 0x94,
	0x6e, 0x71, 0x4a, 0xb6, 0x3e, 0xc8, 0x88, 0x62, 0x3d, 0xdf, 0xe2, 0xf4, 0x20, 0xf6, 0xdc, 0xe2,
	0xf4, 0x90, 0xca, 0x82, 0x54, 0x2b, 0x8e, 0x8e, 0x05, 0xf2, 0x0c, 0x2f, 0x16, 0xc8, 0x33, 0x28,
	0x65, 0x73, 0x49, 0x61, 0xf3, 0x55, 0x71, 0x41, 0x7e, 0x5e, 0x71, 0xaa, 0x90, 0x2f, 0x17, 0x2f,
	0x4a, 0x78, 0x83, 0x3d, 0x85, 0xcb, 0x25, 0x82, 0xa7, 0xb6, 0xe8, 0xf2, 0xa2, 0x9a, 0x83, 0xaa,
	0xdb, 0xe8, 0x11, 0x23, 0x17, 0x2b, 0xd8, 0x36, 0xa1, 0x1b, 0x8c, 0x5c, 0xa8, 0x4a, 0x85, 0x8c,
	0xf5, 0x70, 0x45, 0xb2, 0x1e, 0xce, 0x60, 0x97, 0x32, 0x21, 0x4d, 0x13, 0xc4, 0x57, 0x4a, 0x31,
	0x4d, 0x97, 0x9f, 0x4c, 0x66, 0x0a, 0x13, 0x0a, 0xd1, 0xc7, 0x99, 0xfa, 0xca, 0x0c, 0x93, 0x52,
	0x4b, 0x12, 0x0d, 0xf5, 0x51, 0x44, 0x8b, 0xf5, 0xab, 0xd1, 0x22, 0xb9, 0x16, 0x26, 0x02, 0x8f,
	0xcd, 0x5a, 0xa7, 0x80, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63, 0x7c, 0xf0, 0x48, 0x8e,
	0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96, 0x63, 0x88, 0x32, 0xc3,
	0x1b, 0x4d, 0x15, 0x58, 0x9c, 0x01, 0x8e, 0xba, 0x24, 0x36, 0x70, 0x30, 0x1b, 0x03, 0x02, 0x00,
	0x00, 0xff, 0xff, 0x71, 0xf7, 0xc8, 0xd4, 0x2d, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Returns any `Capability` (or `nil`), with the expiration time, granted to the grantee by the granter for the provided msg type.
	Authorization(ctx context.Context, in *QueryAuthorizationRequest, opts ...grpc.CallOption) (*QueryAuthorizationResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Authorization(ctx context.Context, in *QueryAuthorizationRequest, opts ...grpc.CallOption) (*QueryAuthorizationResponse, error) {
	out := new(QueryAuthorizationResponse)
	err := c.cc.Invoke(ctx, "/cosmos.msg_authorization.Query/Authorization", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Returns any `Capability` (or `nil`), with the expiration time, granted to the grantee by the granter for the provided msg type.
	Authorization(context.Context, *QueryAuthorizationRequest) (*QueryAuthorizationResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Authorization(ctx context.Context, req *QueryAuthorizationRequest) (*QueryAuthorizationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Authorization not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Authorization_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAuthorizationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Authorization(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/cosmos.msg_authorization.Query/Authorization",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Authorization(ctx, req.(*QueryAuthorizationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "cosmos.msg_authorization.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Authorization",
			Handler:    _Query_Authorization_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cosmos/msg_authorization/query.proto",
}

func (m *QueryAuthorizationRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAuthorizationRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAuthorizationRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.MsgType != nil {
		{
			size, err := m.MsgType.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x1a
	}
	if len(m.GranteeAddress) > 0 {
		i -= len(m.GranteeAddress)
		copy(dAtA[i:], m.GranteeAddress)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.GranteeAddress)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.GranterAddress) > 0 {
		i -= len(m.GranterAddress)
		copy(dAtA[i:], m.GranterAddress)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.GranterAddress)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAuthorizationResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAuthorizationResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAuthorizationResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Authorization != nil {
		{
			size, err := m.Authorization.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryAuthorizationRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.GranterAddress)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	l = len(m.GranteeAddress)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	if m.MsgType != nil {
		l = m.MsgType.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAuthorizationResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Authorization != nil {
		l = m.Authorization.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryAuthorizationRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAuthorizationRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAuthorizationRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field GranterAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.GranterAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field GranteeAddress", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.GranteeAddress = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MsgType", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.MsgType == nil {
				m.MsgType = &types.Any{}
			}
			if err := m.MsgType.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *QueryAuthorizationResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: QueryAuthorizationResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAuthorizationResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Authorization", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Authorization == nil {
				m.Authorization = &types.Any{}
			}
			if err := m.Authorization.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthQuery
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowQuery
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)