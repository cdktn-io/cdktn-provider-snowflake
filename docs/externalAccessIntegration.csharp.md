# `externalAccessIntegration` Submodule <a name="`externalAccessIntegration` Submodule" id="@cdktn/provider-snowflake.externalAccessIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalAccessIntegration <a name="ExternalAccessIntegration" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegration(Construct Scope, string Id, ExternalAccessIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig">ExternalAccessIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig">ExternalAccessIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations">PutAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets">PutAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations">ResetAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets">ResetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedApiAuthenticationIntegrations` <a name="PutAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations"></a>

```csharp
private void PutAllowedApiAuthenticationIntegrations(ExternalAccessIntegrationAllowedApiAuthenticationIntegrations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `PutAllowedAuthenticationSecrets` <a name="PutAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets"></a>

```csharp
private void PutAllowedAuthenticationSecrets(ExternalAccessIntegrationAllowedAuthenticationSecrets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts"></a>

```csharp
private void PutTimeouts(ExternalAccessIntegrationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `ResetAllowedApiAuthenticationIntegrations` <a name="ResetAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations"></a>

```csharp
private void ResetAllowedApiAuthenticationIntegrations()
```

##### `ResetAllowedAuthenticationSecrets` <a name="ResetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets"></a>

```csharp
private void ResetAllowedAuthenticationSecrets()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ExternalAccessIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ExternalAccessIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ExternalAccessIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

ExternalAccessIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalAccessIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalAccessIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ExternalAccessIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput">AllowedApiAuthenticationIntegrationsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput">AllowedAuthenticationSecretsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput">AllowedNetworkRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations"></a>

```csharp
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference AllowedApiAuthenticationIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a>

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets"></a>

```csharp
public ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference AllowedAuthenticationSecrets { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput"></a>

```csharp
public ExternalAccessIntegrationDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput"></a>

```csharp
public ExternalAccessIntegrationShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts"></a>

```csharp
public ExternalAccessIntegrationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a>

---

##### `AllowedApiAuthenticationIntegrationsInput`<sup>Optional</sup> <a name="AllowedApiAuthenticationIntegrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput"></a>

```csharp
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrations AllowedApiAuthenticationIntegrationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `AllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="AllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput"></a>

```csharp
public ExternalAccessIntegrationAllowedAuthenticationSecrets AllowedAuthenticationSecretsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `AllowedNetworkRulesInput`<sup>Optional</sup> <a name="AllowedNetworkRulesInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput"></a>

```csharp
public string[] AllowedNetworkRulesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput"></a>

```csharp
public IResolvable|ExternalAccessIntegrationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules"></a>

```csharp
public string[] AllowedNetworkRules { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrations <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationAllowedApiAuthenticationIntegrations {
    string[] Integrations = null,
    bool|IResolvable None = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations">Integrations</a></code> | <code>string[]</code> | Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none">None</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, no API authentication integrations are allowed. Conflicts with `integrations`. |

---

##### `Integrations`<sup>Optional</sup> <a name="Integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations"></a>

```csharp
public string[] Integrations { get; set; }
```

- *Type:* string[]

Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none"></a>

```csharp
public bool|IResolvable None { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, no API authentication integrations are allowed. Conflicts with `integrations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

### ExternalAccessIntegrationAllowedAuthenticationSecrets <a name="ExternalAccessIntegrationAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationAllowedAuthenticationSecrets {
    bool|IResolvable All = null,
    bool|IResolvable None = null,
    string[] Secrets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all">All</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none">None</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets">Secrets</a></code> | <code>string[]</code> | Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all"></a>

```csharp
public bool|IResolvable All { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}

---

##### `None`<sup>Optional</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none"></a>

```csharp
public bool|IResolvable None { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets"></a>

```csharp
public string[] Secrets { get; set; }
```

- *Type:* string[]

Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}

---

### ExternalAccessIntegrationConfig <a name="ExternalAccessIntegrationConfig" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AllowedNetworkRules,
    bool|IResolvable Enabled,
    string Name,
    ExternalAccessIntegrationAllowedApiAuthenticationIntegrations AllowedApiAuthenticationIntegrations = null,
    ExternalAccessIntegrationAllowedAuthenticationSecrets AllowedAuthenticationSecrets = null,
    string Comment = null,
    string Id = null,
    ExternalAccessIntegrationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>string[]</code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules"></a>

```csharp
public string[] AllowedNetworkRules { get; set; }
```

- *Type:* string[]

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `AllowedApiAuthenticationIntegrations`<sup>Optional</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations"></a>

```csharp
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrations AllowedApiAuthenticationIntegrations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `AllowedAuthenticationSecrets`<sup>Optional</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets"></a>

```csharp
public ExternalAccessIntegrationAllowedAuthenticationSecrets AllowedAuthenticationSecrets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts"></a>

```csharp
public ExternalAccessIntegrationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

### ExternalAccessIntegrationDescribeOutput <a name="ExternalAccessIntegrationDescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationDescribeOutput {

};
```


### ExternalAccessIntegrationShowOutput <a name="ExternalAccessIntegrationShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationShowOutput {

};
```


### ExternalAccessIntegrationTimeouts <a name="ExternalAccessIntegrationTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations">ResetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone">ResetNone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrations` <a name="ResetIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations"></a>

```csharp
private void ResetIntegrations()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput">IntegrationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput">NoneInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations">Integrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none">None</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntegrationsInput`<sup>Optional</sup> <a name="IntegrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput"></a>

```csharp
public string[] IntegrationsInput { get; }
```

- *Type:* string[]

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput"></a>

```csharp
public bool|IResolvable NoneInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Integrations`<sup>Required</sup> <a name="Integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations"></a>

```csharp
public string[] Integrations { get; }
```

- *Type:* string[]

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none"></a>

```csharp
public bool|IResolvable None { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue"></a>

```csharp
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---


### ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference <a name="ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone">ResetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll"></a>

```csharp
private void ResetAll()
```

##### `ResetNone` <a name="ResetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone"></a>

```csharp
private void ResetNone()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets"></a>

```csharp
private void ResetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput">AllInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput">NoneInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput">SecretsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all">All</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none">None</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets">Secrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput"></a>

```csharp
public bool|IResolvable AllInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NoneInput`<sup>Optional</sup> <a name="NoneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput"></a>

```csharp
public bool|IResolvable NoneInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput"></a>

```csharp
public string[] SecretsInput { get; }
```

- *Type:* string[]

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all"></a>

```csharp
public bool|IResolvable All { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `None`<sup>Required</sup> <a name="None" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none"></a>

```csharp
public bool|IResolvable None { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets"></a>

```csharp
public string[] Secrets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue"></a>

```csharp
public ExternalAccessIntegrationAllowedAuthenticationSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---


### ExternalAccessIntegrationDescribeOutputList <a name="ExternalAccessIntegrationDescribeOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get"></a>

```csharp
private ExternalAccessIntegrationDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ExternalAccessIntegrationDescribeOutputOutputReference <a name="ExternalAccessIntegrationDescribeOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```csharp
public string[] AllowedApiAuthenticationIntegrations { get; }
```

- *Type:* string[]

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```csharp
public string[] AllowedAuthenticationSecrets { get; }
```

- *Type:* string[]

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```csharp
public string[] AllowedNetworkRules { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public ExternalAccessIntegrationDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a>

---


### ExternalAccessIntegrationShowOutputList <a name="ExternalAccessIntegrationShowOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get"></a>

```csharp
private ExternalAccessIntegrationShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ExternalAccessIntegrationShowOutputOutputReference <a name="ExternalAccessIntegrationShowOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue"></a>

```csharp
public ExternalAccessIntegrationShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a>

---


### ExternalAccessIntegrationTimeoutsOutputReference <a name="ExternalAccessIntegrationTimeoutsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new ExternalAccessIntegrationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ExternalAccessIntegrationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---



