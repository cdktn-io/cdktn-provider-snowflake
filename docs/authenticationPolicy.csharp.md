# `authenticationPolicy` Submodule <a name="`authenticationPolicy` Submodule" id="@cdktn/provider-snowflake.authenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticationPolicy <a name="AuthenticationPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy snowflake_authentication_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicy(Construct Scope, string Id, AuthenticationPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig">AuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putClientPolicy">PutClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy">PutMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy">PutPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy">PutWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods">ResetAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientPolicy">ResetClientPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes">ResetClientTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods">ResetMfaAuthenticationMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment">ResetMfaEnrollment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy">ResetMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy">ResetPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations">ResetSecurityIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy">ResetWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientPolicy` <a name="PutClientPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putClientPolicy"></a>

```csharp
private void PutClientPolicy(IResolvable|AuthenticationPolicyClientPolicy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putClientPolicy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]

---

##### `PutMfaPolicy` <a name="PutMfaPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy"></a>

```csharp
private void PutMfaPolicy(AuthenticationPolicyMfaPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putMfaPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `PutPatPolicy` <a name="PutPatPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy"></a>

```csharp
private void PutPatPolicy(AuthenticationPolicyPatPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putPatPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(AuthenticationPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `PutWorkloadIdentityPolicy` <a name="PutWorkloadIdentityPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy"></a>

```csharp
private void PutWorkloadIdentityPolicy(AuthenticationPolicyWorkloadIdentityPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.putWorkloadIdentityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `ResetAuthenticationMethods` <a name="ResetAuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetAuthenticationMethods"></a>

```csharp
private void ResetAuthenticationMethods()
```

##### `ResetClientPolicy` <a name="ResetClientPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientPolicy"></a>

```csharp
private void ResetClientPolicy()
```

##### `ResetClientTypes` <a name="ResetClientTypes" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetClientTypes"></a>

```csharp
private void ResetClientTypes()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMfaAuthenticationMethods` <a name="ResetMfaAuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaAuthenticationMethods"></a>

```csharp
private void ResetMfaAuthenticationMethods()
```

##### `ResetMfaEnrollment` <a name="ResetMfaEnrollment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaEnrollment"></a>

```csharp
private void ResetMfaEnrollment()
```

##### `ResetMfaPolicy` <a name="ResetMfaPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetMfaPolicy"></a>

```csharp
private void ResetMfaPolicy()
```

##### `ResetPatPolicy` <a name="ResetPatPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetPatPolicy"></a>

```csharp
private void ResetPatPolicy()
```

##### `ResetSecurityIntegrations` <a name="ResetSecurityIntegrations" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetSecurityIntegrations"></a>

```csharp
private void ResetSecurityIntegrations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkloadIdentityPolicy` <a name="ResetWorkloadIdentityPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.resetWorkloadIdentityPolicy"></a>

```csharp
private void ResetWorkloadIdentityPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

AuthenticationPolicy.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

AuthenticationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

AuthenticationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

AuthenticationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuthenticationPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuthenticationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientPolicy">ClientPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList">AuthenticationPolicyClientPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy">MfaPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy">PatPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput">AuthenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientPolicyInput">ClientPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput">ClientTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput">MfaAuthenticationMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput">MfaEnrollmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput">MfaPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput">PatPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput">SecurityIntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput">WorkloadIdentityPolicyInput</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes">ClientTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientPolicy`<sup>Required</sup> <a name="ClientPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientPolicy"></a>

```csharp
public AuthenticationPolicyClientPolicyList ClientPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList">AuthenticationPolicyClientPolicyList</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.describeOutput"></a>

```csharp
public AuthenticationPolicyDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList">AuthenticationPolicyDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicy"></a>

```csharp
public AuthenticationPolicyMfaPolicyOutputReference MfaPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference">AuthenticationPolicyMfaPolicyOutputReference</a>

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicy"></a>

```csharp
public AuthenticationPolicyPatPolicyOutputReference PatPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference">AuthenticationPolicyPatPolicyOutputReference</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.showOutput"></a>

```csharp
public AuthenticationPolicyShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList">AuthenticationPolicyShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeouts"></a>

```csharp
public AuthenticationPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference">AuthenticationPolicyTimeoutsOutputReference</a>

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicy"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicyOutputReference WorkloadIdentityPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference">AuthenticationPolicyWorkloadIdentityPolicyOutputReference</a>

---

##### `AuthenticationMethodsInput`<sup>Optional</sup> <a name="AuthenticationMethodsInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethodsInput"></a>

```csharp
public string[] AuthenticationMethodsInput { get; }
```

- *Type:* string[]

---

##### `ClientPolicyInput`<sup>Optional</sup> <a name="ClientPolicyInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientPolicyInput"></a>

```csharp
public IResolvable|AuthenticationPolicyClientPolicy[] ClientPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]

---

##### `ClientTypesInput`<sup>Optional</sup> <a name="ClientTypesInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypesInput"></a>

```csharp
public string[] ClientTypesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MfaAuthenticationMethodsInput`<sup>Optional</sup> <a name="MfaAuthenticationMethodsInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethodsInput"></a>

```csharp
public string[] MfaAuthenticationMethodsInput { get; }
```

- *Type:* string[]

---

##### `MfaEnrollmentInput`<sup>Optional</sup> <a name="MfaEnrollmentInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollmentInput"></a>

```csharp
public string MfaEnrollmentInput { get; }
```

- *Type:* string

---

##### `MfaPolicyInput`<sup>Optional</sup> <a name="MfaPolicyInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaPolicyInput"></a>

```csharp
public AuthenticationPolicyMfaPolicy MfaPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatPolicyInput`<sup>Optional</sup> <a name="PatPolicyInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.patPolicyInput"></a>

```csharp
public AuthenticationPolicyPatPolicy PatPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SecurityIntegrationsInput`<sup>Optional</sup> <a name="SecurityIntegrationsInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrationsInput"></a>

```csharp
public string[] SecurityIntegrationsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|AuthenticationPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---

##### `WorkloadIdentityPolicyInput`<sup>Optional</sup> <a name="WorkloadIdentityPolicyInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.workloadIdentityPolicyInput"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicy WorkloadIdentityPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.authenticationMethods"></a>

```csharp
public string[] AuthenticationMethods { get; }
```

- *Type:* string[]

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.clientTypes"></a>

```csharp
public string[] ClientTypes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MfaAuthenticationMethods`<sup>Required</sup> <a name="MfaAuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaAuthenticationMethods"></a>

```csharp
public string[] MfaAuthenticationMethods { get; }
```

- *Type:* string[]

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.securityIntegrations"></a>

```csharp
public string[] SecurityIntegrations { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticationPolicyClientPolicy <a name="AuthenticationPolicyClientPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyClientPolicy {
    string ClientType,
    string MinimumVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy.property.clientType">ClientType</a></code> | <code>string</code> | The client or driver type. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | Minimum allowed version for this client/driver type (e.g. '1.14.1'). |

---

##### `ClientType`<sup>Required</sup> <a name="ClientType" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy.property.clientType"></a>

```csharp
public string ClientType { get; set; }
```

- *Type:* string

The client or driver type.

Valid values (case-insensitive): `JDBC_DRIVER` | `ODBC_DRIVER` | `PYTHON_DRIVER` | `JAVASCRIPT_DRIVER` | `C_DRIVER` | `GO_DRIVER` | `PHP_DRIVER` | `DOTNET_DRIVER` | `SQL_API` | `SNOWPIPE_STREAMING_CLIENT_SDK` | `PY_CORE` | `SPROC_PYTHON` | `PYTHON_SNOWPARK` | `SQL_ALCHEMY` | `SNOWPARK` | `SNOWFLAKE_CLIENT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#client_type AuthenticationPolicy#client_type}

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; set; }
```

- *Type:* string

Minimum allowed version for this client/driver type (e.g. '1.14.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#minimum_version AuthenticationPolicy#minimum_version}

---

### AuthenticationPolicyConfig <a name="AuthenticationPolicyConfig" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string Name,
    string Schema,
    string[] AuthenticationMethods = null,
    IResolvable|AuthenticationPolicyClientPolicy[] ClientPolicy = null,
    string[] ClientTypes = null,
    string Comment = null,
    string Id = null,
    string[] MfaAuthenticationMethods = null,
    string MfaEnrollment = null,
    AuthenticationPolicyMfaPolicy MfaPolicy = null,
    AuthenticationPolicyPatPolicy PatPolicy = null,
    string[] SecurityIntegrations = null,
    AuthenticationPolicyTimeouts Timeouts = null,
    AuthenticationPolicyWorkloadIdentityPolicy WorkloadIdentityPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the authentication policy. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the authentication policy. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the authentication policy. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string[]</code> | A list of authentication methods that are allowed during login. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientPolicy">ClientPolicy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]</code> | client_policy block. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes">ClientTypes</a></code> | <code>string[]</code> | A list of clients that can authenticate with Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the authentication policy. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods">MfaAuthenticationMethods</a></code> | <code>string[]</code> | A list of authentication methods that enforce multi-factor authentication (MFA) during login. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | Determines whether a user must enroll in multi-factor authentication. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy">MfaPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | mfa_policy block. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy">PatPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | pat_policy block. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string[]</code> | A list of security integrations the authentication policy is associated with. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | workload_identity_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#database AuthenticationPolicy#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#name AuthenticationPolicy#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the authentication policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}

---

##### `AuthenticationMethods`<sup>Optional</sup> <a name="AuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.authenticationMethods"></a>

```csharp
public string[] AuthenticationMethods { get; set; }
```

- *Type:* string[]

A list of authentication methods that are allowed during login.

Valid values are (case-insensitive): `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR` | `PROGRAMMATIC_ACCESS_TOKEN` | `WORKLOAD_IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}

---

##### `ClientPolicy`<sup>Optional</sup> <a name="ClientPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientPolicy"></a>

```csharp
public IResolvable|AuthenticationPolicyClientPolicy[] ClientPolicy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]

client_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#client_policy AuthenticationPolicy#client_policy}

---

##### `ClientTypes`<sup>Optional</sup> <a name="ClientTypes" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.clientTypes"></a>

```csharp
public string[] ClientTypes { get; set; }
```

- *Type:* string[]

A list of clients that can authenticate with Snowflake.

If a client tries to connect, and the client is not one of the valid `client_types`, then the login attempt fails. Valid values are (case-insensitive): `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL` | `SNOWFLAKE_CLI`. The `client_types` property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#id AuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MfaAuthenticationMethods`<sup>Optional</sup> <a name="MfaAuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaAuthenticationMethods"></a>

```csharp
public string[] MfaAuthenticationMethods { get; set; }
```

- *Type:* string[]

A list of authentication methods that enforce multi-factor authentication (MFA) during login.

Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}

---

##### `MfaEnrollment`<sup>Optional</sup> <a name="MfaEnrollment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; set; }
```

- *Type:* string

Determines whether a user must enroll in multi-factor authentication.

Valid values are (case-insensitive): `REQUIRED` | `REQUIRED_PASSWORD_ONLY` | `OPTIONAL`. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the `client_types` parameter must include `snowflake_ui`, because Snowsight is the only place users can enroll in multi-factor authentication (MFA). Note that when you set this value to OPTIONAL, and your account setup forces users to enroll in MFA, then Snowflake may set quietly this value to `REQUIRED_PASSWORD_ONLY`, which may cause permadiff. In this case, you may want to adjust this field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}

---

##### `MfaPolicy`<sup>Optional</sup> <a name="MfaPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.mfaPolicy"></a>

```csharp
public AuthenticationPolicyMfaPolicy MfaPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

mfa_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#mfa_policy AuthenticationPolicy#mfa_policy}

---

##### `PatPolicy`<sup>Optional</sup> <a name="PatPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.patPolicy"></a>

```csharp
public AuthenticationPolicyPatPolicy PatPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

pat_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#pat_policy AuthenticationPolicy#pat_policy}

---

##### `SecurityIntegrations`<sup>Optional</sup> <a name="SecurityIntegrations" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.securityIntegrations"></a>

```csharp
public string[] SecurityIntegrations { get; set; }
```

- *Type:* string[]

A list of security integrations the authentication policy is associated with.

This parameter has no effect when `saml` or `oauth` are not in the `authentication_methods` list. All values in the `security_integrations` list must be compatible with the values in the `authentication_methods` list. For example, if `security_integrations` contains a SAML security integration, and `authentication_methods` contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use `ALL` as parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.timeouts"></a>

```csharp
public AuthenticationPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#timeouts AuthenticationPolicy#timeouts}

---

##### `WorkloadIdentityPolicy`<sup>Optional</sup> <a name="WorkloadIdentityPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyConfig.property.workloadIdentityPolicy"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicy WorkloadIdentityPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

workload_identity_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#workload_identity_policy AuthenticationPolicy#workload_identity_policy}

---

### AuthenticationPolicyDescribeOutput <a name="AuthenticationPolicyDescribeOutput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyDescribeOutput {

};
```


### AuthenticationPolicyMfaPolicy <a name="AuthenticationPolicyMfaPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyMfaPolicy {
    string[] AllowedMethods = null,
    string EnforceMfaOnExternalAuthentication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Specifies the allowed methods for the MFA policy. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication">EnforceMfaOnExternalAuthentication</a></code> | <code>string</code> | Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` \| `NONE`. |

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Specifies the allowed methods for the MFA policy.

Valid values are: `ALL` | `PASSKEY` | `TOTP` | `OTP` | `DUO`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#allowed_methods AuthenticationPolicy#allowed_methods}

---

##### `EnforceMfaOnExternalAuthentication`<sup>Optional</sup> <a name="EnforceMfaOnExternalAuthentication" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy.property.enforceMfaOnExternalAuthentication"></a>

```csharp
public string EnforceMfaOnExternalAuthentication { get; set; }
```

- *Type:* string

Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` | `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#enforce_mfa_on_external_authentication AuthenticationPolicy#enforce_mfa_on_external_authentication}

---

### AuthenticationPolicyPatPolicy <a name="AuthenticationPolicyPatPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyPatPolicy {
    double DefaultExpiryInDays = null,
    double MaxExpiryInDays = null,
    string NetworkPolicyEvaluation = null,
    string RequireRoleRestrictionForServiceUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays">DefaultExpiryInDays</a></code> | <code>double</code> | Specifies the default expiration time (in days) for a programmatic access token. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays">MaxExpiryInDays</a></code> | <code>double</code> | Specifies the maximum number of days that can be set for the expiration time for a programmatic access token. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation">NetworkPolicyEvaluation</a></code> | <code>string</code> | Specifies the network policy evaluation for the PAT. Valid values are: `ENFORCED_REQUIRED` \| `ENFORCED_NOT_REQUIRED` \| `NOT_ENFORCED`. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.requireRoleRestrictionForServiceUsers">RequireRoleRestrictionForServiceUsers</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) If true, when you generate a programmatic access token for a service user, you must restrict the use of that token to a specific role. |

---

##### `DefaultExpiryInDays`<sup>Optional</sup> <a name="DefaultExpiryInDays" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.defaultExpiryInDays"></a>

```csharp
public double DefaultExpiryInDays { get; set; }
```

- *Type:* double

Specifies the default expiration time (in days) for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#default_expiry_in_days AuthenticationPolicy#default_expiry_in_days}

---

##### `MaxExpiryInDays`<sup>Optional</sup> <a name="MaxExpiryInDays" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.maxExpiryInDays"></a>

```csharp
public double MaxExpiryInDays { get; set; }
```

- *Type:* double

Specifies the maximum number of days that can be set for the expiration time for a programmatic access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#max_expiry_in_days AuthenticationPolicy#max_expiry_in_days}

---

##### `NetworkPolicyEvaluation`<sup>Optional</sup> <a name="NetworkPolicyEvaluation" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.networkPolicyEvaluation"></a>

```csharp
public string NetworkPolicyEvaluation { get; set; }
```

- *Type:* string

Specifies the network policy evaluation for the PAT. Valid values are: `ENFORCED_REQUIRED` | `ENFORCED_NOT_REQUIRED` | `NOT_ENFORCED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#network_policy_evaluation AuthenticationPolicy#network_policy_evaluation}

---

##### `RequireRoleRestrictionForServiceUsers`<sup>Optional</sup> <a name="RequireRoleRestrictionForServiceUsers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy.property.requireRoleRestrictionForServiceUsers"></a>

```csharp
public string RequireRoleRestrictionForServiceUsers { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) If true, when you generate a programmatic access token for a service user, you must restrict the use of that token to a specific role.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#require_role_restriction_for_service_users AuthenticationPolicy#require_role_restriction_for_service_users}

---

### AuthenticationPolicyShowOutput <a name="AuthenticationPolicyShowOutput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyShowOutput {

};
```


### AuthenticationPolicyTimeouts <a name="AuthenticationPolicyTimeouts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#create AuthenticationPolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#read AuthenticationPolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#update AuthenticationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#create AuthenticationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#read AuthenticationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#update AuthenticationPolicy#update}.

---

### AuthenticationPolicyWorkloadIdentityPolicy <a name="AuthenticationPolicyWorkloadIdentityPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyWorkloadIdentityPolicy {
    string[] AllowedAwsAccounts = null,
    string[] AllowedAzureIssuers = null,
    string[] AllowedOidcIssuers = null,
    string[] AllowedProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts">AllowedAwsAccounts</a></code> | <code>string[]</code> | Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers">AllowedAzureIssuers</a></code> | <code>string[]</code> | Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers">AllowedOidcIssuers</a></code> | <code>string[]</code> | Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders">AllowedProviders</a></code> | <code>string[]</code> | Specifies the allowed providers for the workload identity policy. |

---

##### `AllowedAwsAccounts`<sup>Optional</sup> <a name="AllowedAwsAccounts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAwsAccounts"></a>

```csharp
public string[] AllowedAwsAccounts { get; set; }
```

- *Type:* string[]

Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#allowed_aws_accounts AuthenticationPolicy#allowed_aws_accounts}

---

##### `AllowedAzureIssuers`<sup>Optional</sup> <a name="AllowedAzureIssuers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedAzureIssuers"></a>

```csharp
public string[] AllowedAzureIssuers { get; set; }
```

- *Type:* string[]

Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#allowed_azure_issuers AuthenticationPolicy#allowed_azure_issuers}

---

##### `AllowedOidcIssuers`<sup>Optional</sup> <a name="AllowedOidcIssuers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedOidcIssuers"></a>

```csharp
public string[] AllowedOidcIssuers { get; set; }
```

- *Type:* string[]

Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#allowed_oidc_issuers AuthenticationPolicy#allowed_oidc_issuers}

---

##### `AllowedProviders`<sup>Optional</sup> <a name="AllowedProviders" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy.property.allowedProviders"></a>

```csharp
public string[] AllowedProviders { get; set; }
```

- *Type:* string[]

Specifies the allowed providers for the workload identity policy.

Valid values are: `ALL` | `AWS` | `AZURE` | `GCP` | `OIDC`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.17.0/docs/resources/authentication_policy#allowed_providers AuthenticationPolicy#allowed_providers}

---

## Classes <a name="Classes" id="Classes"></a>

### AuthenticationPolicyClientPolicyList <a name="AuthenticationPolicyClientPolicyList" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyClientPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.get"></a>

```csharp
private AuthenticationPolicyClientPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyList.property.internalValue"></a>

```csharp
public IResolvable|AuthenticationPolicyClientPolicy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>[]

---


### AuthenticationPolicyClientPolicyOutputReference <a name="AuthenticationPolicyClientPolicyOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyClientPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.clientTypeInput">ClientTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.minimumVersionInput">MinimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.clientType">ClientType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientTypeInput`<sup>Optional</sup> <a name="ClientTypeInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.clientTypeInput"></a>

```csharp
public string ClientTypeInput { get; }
```

- *Type:* string

---

##### `MinimumVersionInput`<sup>Optional</sup> <a name="MinimumVersionInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.minimumVersionInput"></a>

```csharp
public string MinimumVersionInput { get; }
```

- *Type:* string

---

##### `ClientType`<sup>Required</sup> <a name="ClientType" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.clientType"></a>

```csharp
public string ClientType { get; }
```

- *Type:* string

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuthenticationPolicyClientPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyClientPolicy">AuthenticationPolicyClientPolicy</a>

---


### AuthenticationPolicyDescribeOutputList <a name="AuthenticationPolicyDescribeOutputList" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get"></a>

```csharp
private AuthenticationPolicyDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AuthenticationPolicyDescribeOutputOutputReference <a name="AuthenticationPolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods">AuthenticationMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientPolicy">ClientPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes">ClientTypes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment">MfaEnrollment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy">MfaPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy">PatPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations">SecurityIntegrations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy">WorkloadIdentityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationMethods`<sup>Required</sup> <a name="AuthenticationMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.authenticationMethods"></a>

```csharp
public string AuthenticationMethods { get; }
```

- *Type:* string

---

##### `ClientPolicy`<sup>Required</sup> <a name="ClientPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientPolicy"></a>

```csharp
public string ClientPolicy { get; }
```

- *Type:* string

---

##### `ClientTypes`<sup>Required</sup> <a name="ClientTypes" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.clientTypes"></a>

```csharp
public string ClientTypes { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `MfaEnrollment`<sup>Required</sup> <a name="MfaEnrollment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaEnrollment"></a>

```csharp
public string MfaEnrollment { get; }
```

- *Type:* string

---

##### `MfaPolicy`<sup>Required</sup> <a name="MfaPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.mfaPolicy"></a>

```csharp
public string MfaPolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PatPolicy`<sup>Required</sup> <a name="PatPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.patPolicy"></a>

```csharp
public string PatPolicy { get; }
```

- *Type:* string

---

##### `SecurityIntegrations`<sup>Required</sup> <a name="SecurityIntegrations" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.securityIntegrations"></a>

```csharp
public string SecurityIntegrations { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPolicy`<sup>Required</sup> <a name="WorkloadIdentityPolicy" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.workloadIdentityPolicy"></a>

```csharp
public string WorkloadIdentityPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyDescribeOutput">AuthenticationPolicyDescribeOutput</a>

---


### AuthenticationPolicyMfaPolicyOutputReference <a name="AuthenticationPolicyMfaPolicyOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyMfaPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication">ResetEnforceMfaOnExternalAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetAllowedMethods"></a>

```csharp
private void ResetAllowedMethods()
```

##### `ResetEnforceMfaOnExternalAuthentication` <a name="ResetEnforceMfaOnExternalAuthentication" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.resetEnforceMfaOnExternalAuthentication"></a>

```csharp
private void ResetEnforceMfaOnExternalAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput">EnforceMfaOnExternalAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication">EnforceMfaOnExternalAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `EnforceMfaOnExternalAuthenticationInput`<sup>Optional</sup> <a name="EnforceMfaOnExternalAuthenticationInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthenticationInput"></a>

```csharp
public string EnforceMfaOnExternalAuthenticationInput { get; }
```

- *Type:* string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `EnforceMfaOnExternalAuthentication`<sup>Required</sup> <a name="EnforceMfaOnExternalAuthentication" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.enforceMfaOnExternalAuthentication"></a>

```csharp
public string EnforceMfaOnExternalAuthentication { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicyOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyMfaPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyMfaPolicy">AuthenticationPolicyMfaPolicy</a>

---


### AuthenticationPolicyPatPolicyOutputReference <a name="AuthenticationPolicyPatPolicyOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyPatPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays">ResetDefaultExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays">ResetMaxExpiryInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation">ResetNetworkPolicyEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetRequireRoleRestrictionForServiceUsers">ResetRequireRoleRestrictionForServiceUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultExpiryInDays` <a name="ResetDefaultExpiryInDays" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetDefaultExpiryInDays"></a>

```csharp
private void ResetDefaultExpiryInDays()
```

##### `ResetMaxExpiryInDays` <a name="ResetMaxExpiryInDays" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetMaxExpiryInDays"></a>

```csharp
private void ResetMaxExpiryInDays()
```

##### `ResetNetworkPolicyEvaluation` <a name="ResetNetworkPolicyEvaluation" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetNetworkPolicyEvaluation"></a>

```csharp
private void ResetNetworkPolicyEvaluation()
```

##### `ResetRequireRoleRestrictionForServiceUsers` <a name="ResetRequireRoleRestrictionForServiceUsers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.resetRequireRoleRestrictionForServiceUsers"></a>

```csharp
private void ResetRequireRoleRestrictionForServiceUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput">DefaultExpiryInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput">MaxExpiryInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput">NetworkPolicyEvaluationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.requireRoleRestrictionForServiceUsersInput">RequireRoleRestrictionForServiceUsersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays">DefaultExpiryInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays">MaxExpiryInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation">NetworkPolicyEvaluation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.requireRoleRestrictionForServiceUsers">RequireRoleRestrictionForServiceUsers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultExpiryInDaysInput`<sup>Optional</sup> <a name="DefaultExpiryInDaysInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDaysInput"></a>

```csharp
public double DefaultExpiryInDaysInput { get; }
```

- *Type:* double

---

##### `MaxExpiryInDaysInput`<sup>Optional</sup> <a name="MaxExpiryInDaysInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDaysInput"></a>

```csharp
public double MaxExpiryInDaysInput { get; }
```

- *Type:* double

---

##### `NetworkPolicyEvaluationInput`<sup>Optional</sup> <a name="NetworkPolicyEvaluationInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluationInput"></a>

```csharp
public string NetworkPolicyEvaluationInput { get; }
```

- *Type:* string

---

##### `RequireRoleRestrictionForServiceUsersInput`<sup>Optional</sup> <a name="RequireRoleRestrictionForServiceUsersInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.requireRoleRestrictionForServiceUsersInput"></a>

```csharp
public string RequireRoleRestrictionForServiceUsersInput { get; }
```

- *Type:* string

---

##### `DefaultExpiryInDays`<sup>Required</sup> <a name="DefaultExpiryInDays" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.defaultExpiryInDays"></a>

```csharp
public double DefaultExpiryInDays { get; }
```

- *Type:* double

---

##### `MaxExpiryInDays`<sup>Required</sup> <a name="MaxExpiryInDays" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.maxExpiryInDays"></a>

```csharp
public double MaxExpiryInDays { get; }
```

- *Type:* double

---

##### `NetworkPolicyEvaluation`<sup>Required</sup> <a name="NetworkPolicyEvaluation" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.networkPolicyEvaluation"></a>

```csharp
public string NetworkPolicyEvaluation { get; }
```

- *Type:* string

---

##### `RequireRoleRestrictionForServiceUsers`<sup>Required</sup> <a name="RequireRoleRestrictionForServiceUsers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.requireRoleRestrictionForServiceUsers"></a>

```csharp
public string RequireRoleRestrictionForServiceUsers { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicyOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyPatPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyPatPolicy">AuthenticationPolicyPatPolicy</a>

---


### AuthenticationPolicyShowOutputList <a name="AuthenticationPolicyShowOutputList" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get"></a>

```csharp
private AuthenticationPolicyShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AuthenticationPolicyShowOutputOutputReference <a name="AuthenticationPolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutputOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyShowOutput">AuthenticationPolicyShowOutput</a>

---


### AuthenticationPolicyTimeoutsOutputReference <a name="AuthenticationPolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuthenticationPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyTimeouts">AuthenticationPolicyTimeouts</a>

---


### AuthenticationPolicyWorkloadIdentityPolicyOutputReference <a name="AuthenticationPolicyWorkloadIdentityPolicyOutputReference" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new AuthenticationPolicyWorkloadIdentityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts">ResetAllowedAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers">ResetAllowedAzureIssuers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers">ResetAllowedOidcIssuers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders">ResetAllowedProviders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAwsAccounts` <a name="ResetAllowedAwsAccounts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAwsAccounts"></a>

```csharp
private void ResetAllowedAwsAccounts()
```

##### `ResetAllowedAzureIssuers` <a name="ResetAllowedAzureIssuers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedAzureIssuers"></a>

```csharp
private void ResetAllowedAzureIssuers()
```

##### `ResetAllowedOidcIssuers` <a name="ResetAllowedOidcIssuers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedOidcIssuers"></a>

```csharp
private void ResetAllowedOidcIssuers()
```

##### `ResetAllowedProviders` <a name="ResetAllowedProviders" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.resetAllowedProviders"></a>

```csharp
private void ResetAllowedProviders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput">AllowedAwsAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput">AllowedAzureIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput">AllowedOidcIssuersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput">AllowedProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts">AllowedAwsAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers">AllowedAzureIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers">AllowedOidcIssuers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders">AllowedProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAwsAccountsInput`<sup>Optional</sup> <a name="AllowedAwsAccountsInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccountsInput"></a>

```csharp
public string[] AllowedAwsAccountsInput { get; }
```

- *Type:* string[]

---

##### `AllowedAzureIssuersInput`<sup>Optional</sup> <a name="AllowedAzureIssuersInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuersInput"></a>

```csharp
public string[] AllowedAzureIssuersInput { get; }
```

- *Type:* string[]

---

##### `AllowedOidcIssuersInput`<sup>Optional</sup> <a name="AllowedOidcIssuersInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuersInput"></a>

```csharp
public string[] AllowedOidcIssuersInput { get; }
```

- *Type:* string[]

---

##### `AllowedProvidersInput`<sup>Optional</sup> <a name="AllowedProvidersInput" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProvidersInput"></a>

```csharp
public string[] AllowedProvidersInput { get; }
```

- *Type:* string[]

---

##### `AllowedAwsAccounts`<sup>Required</sup> <a name="AllowedAwsAccounts" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAwsAccounts"></a>

```csharp
public string[] AllowedAwsAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedAzureIssuers`<sup>Required</sup> <a name="AllowedAzureIssuers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedAzureIssuers"></a>

```csharp
public string[] AllowedAzureIssuers { get; }
```

- *Type:* string[]

---

##### `AllowedOidcIssuers`<sup>Required</sup> <a name="AllowedOidcIssuers" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedOidcIssuers"></a>

```csharp
public string[] AllowedOidcIssuers { get; }
```

- *Type:* string[]

---

##### `AllowedProviders`<sup>Required</sup> <a name="AllowedProviders" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.allowedProviders"></a>

```csharp
public string[] AllowedProviders { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicyOutputReference.property.internalValue"></a>

```csharp
public AuthenticationPolicyWorkloadIdentityPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.authenticationPolicy.AuthenticationPolicyWorkloadIdentityPolicy">AuthenticationPolicyWorkloadIdentityPolicy</a>

---



