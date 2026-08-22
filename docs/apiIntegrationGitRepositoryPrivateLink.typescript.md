# `apiIntegrationGitRepositoryPrivateLink` Submodule <a name="`apiIntegrationGitRepositoryPrivateLink` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGitRepositoryPrivateLink <a name="ApiIntegrationGitRepositoryPrivateLink" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link snowflake_api_integration_git_repository_private_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

new apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink(scope: Construct, id: string, config: ApiIntegrationGitRepositoryPrivateLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig">ApiIntegrationGitRepositoryPrivateLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig">ApiIntegrationGitRepositoryPrivateLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets">resetAllAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets">resetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets">resetNoAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates">resetTlsTrustedCertificates</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiIntegrationGitRepositoryPrivateLinkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---

##### `resetAllAllowedAuthenticationSecrets` <a name="resetAllAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllAllowedAuthenticationSecrets"></a>

```typescript
public resetAllAllowedAuthenticationSecrets(): void
```

##### `resetAllowedAuthenticationSecrets` <a name="resetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetAllowedAuthenticationSecrets"></a>

```typescript
public resetAllowedAuthenticationSecrets(): void
```

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNoAllowedAuthenticationSecrets` <a name="resetNoAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetNoAllowedAuthenticationSecrets"></a>

```typescript
public resetNoAllowedAuthenticationSecrets(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsTrustedCertificates` <a name="resetTlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.resetTlsTrustedCertificates"></a>

```typescript
public resetTlsTrustedCertificates(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiIntegrationGitRepositoryPrivateLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationGitRepositoryPrivateLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationGitRepositoryPrivateLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGitRepositoryPrivateLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput">allAllowedAuthenticationSecretsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput">allowedAuthenticationSecretsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput">noAllowedAuthenticationSecretsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput">tlsTrustedCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput">usePrivatelinkEndpointInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets">allAllowedAuthenticationSecrets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets">noAllowedAuthenticationSecrets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates">tlsTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList">ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.showOutput"></a>

```typescript
public readonly showOutput: ApiIntegrationGitRepositoryPrivateLinkShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList">ApiIntegrationGitRepositoryPrivateLinkShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference">ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference</a>

---

##### `allAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="allAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecretsInput"></a>

```typescript
public readonly allAllowedAuthenticationSecretsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="allowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecretsInput"></a>

```typescript
public readonly allowedAuthenticationSecretsInput: string[];
```

- *Type:* string[]

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `noAllowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="noAllowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecretsInput"></a>

```typescript
public readonly noAllowedAuthenticationSecretsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiIntegrationGitRepositoryPrivateLinkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---

##### `tlsTrustedCertificatesInput`<sup>Optional</sup> <a name="tlsTrustedCertificatesInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificatesInput"></a>

```typescript
public readonly tlsTrustedCertificatesInput: string[];
```

- *Type:* string[]

---

##### `usePrivatelinkEndpointInput`<sup>Optional</sup> <a name="usePrivatelinkEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpointInput"></a>

```typescript
public readonly usePrivatelinkEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allAllowedAuthenticationSecrets`<sup>Required</sup> <a name="allAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allAllowedAuthenticationSecrets"></a>

```typescript
public readonly allAllowedAuthenticationSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: string[];
```

- *Type:* string[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `noAllowedAuthenticationSecrets`<sup>Required</sup> <a name="noAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.noAllowedAuthenticationSecrets"></a>

```typescript
public readonly noAllowedAuthenticationSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tlsTrustedCertificates`<sup>Required</sup> <a name="tlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tlsTrustedCertificates"></a>

```typescript
public readonly tlsTrustedCertificates: string[];
```

- *Type:* string[]

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGitRepositoryPrivateLinkConfig <a name="ApiIntegrationGitRepositoryPrivateLinkConfig" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

const apiIntegrationGitRepositoryPrivateLinkConfig: apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to use the private link endpoint for the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets">allAllowedAuthenticationSecrets</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, all authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>string[]</code> | A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets">noAllowedAuthenticationSecrets</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, no authentication secrets are allowed to be used when authenticating to the git repository. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates">tlsTrustedCertificates</a></code> | <code>string[]</code> | Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#api_allowed_prefixes ApiIntegrationGitRepositoryPrivateLink#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#enabled ApiIntegrationGitRepositoryPrivateLink#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#name ApiIntegrationGitRepositoryPrivateLink#name}

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to use the private link endpoint for the git repository.

When set to true, Snowflake uses the VNet-injected endpoint for the git repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#use_privatelink_endpoint ApiIntegrationGitRepositoryPrivateLink#use_privatelink_endpoint}

---

##### `allAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="allAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allAllowedAuthenticationSecrets"></a>

```typescript
public readonly allAllowedAuthenticationSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, all authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `no_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#all_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#all_allowed_authentication_secrets}

---

##### `allowedAuthenticationSecrets`<sup>Optional</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: string[];
```

- *Type:* string[]

A list of fully-qualified secret identifiers (database.schema.secret) allowed to be used when authenticating to the git repository. Conflicts with `all_allowed_authentication_secrets` and `no_allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#allowed_authentication_secrets}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#api_blocked_prefixes ApiIntegrationGitRepositoryPrivateLink#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#comment ApiIntegrationGitRepositoryPrivateLink#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#id ApiIntegrationGitRepositoryPrivateLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noAllowedAuthenticationSecrets`<sup>Optional</sup> <a name="noAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.noAllowedAuthenticationSecrets"></a>

```typescript
public readonly noAllowedAuthenticationSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, no authentication secrets are allowed to be used when authenticating to the git repository.

Conflicts with `all_allowed_authentication_secrets` and `allowed_authentication_secrets`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#no_allowed_authentication_secrets ApiIntegrationGitRepositoryPrivateLink#no_allowed_authentication_secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationGitRepositoryPrivateLinkTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#timeouts ApiIntegrationGitRepositoryPrivateLink#timeouts}

---

##### `tlsTrustedCertificates`<sup>Optional</sup> <a name="tlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkConfig.property.tlsTrustedCertificates"></a>

```typescript
public readonly tlsTrustedCertificates: string[];
```

- *Type:* string[]

Specifies secrets containing self-signed certificates to be used when authenticating with a Git repository server over private link.

Only needed when the certificate is self-signed rather than signed by a certificate authority. Each entry must be a fully-qualified name of a Snowflake secret of type generic string whose value is Base64-encoded certificate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#tls_trusted_certificates ApiIntegrationGitRepositoryPrivateLink#tls_trusted_certificates}

---

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutput <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

const apiIntegrationGitRepositoryPrivateLinkDescribeOutput: apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput = { ... }
```


### ApiIntegrationGitRepositoryPrivateLinkShowOutput <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

const apiIntegrationGitRepositoryPrivateLinkShowOutput: apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput = { ... }
```


### ApiIntegrationGitRepositoryPrivateLinkTimeouts <a name="ApiIntegrationGitRepositoryPrivateLinkTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

const apiIntegrationGitRepositoryPrivateLinkTimeouts: apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#create ApiIntegrationGitRepositoryPrivateLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#delete ApiIntegrationGitRepositoryPrivateLink#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#read ApiIntegrationGitRepositoryPrivateLink#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/api_integration_git_repository_private_link#update ApiIntegrationGitRepositoryPrivateLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

new apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

new apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates">tlsTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```typescript
public readonly allowedAuthenticationSecrets: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tlsTrustedCertificates`<sup>Required</sup> <a name="tlsTrustedCertificates" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```typescript
public readonly tlsTrustedCertificates: string[];
```

- *Type:* string[]

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```typescript
public readonly usePrivatelinkEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationGitRepositoryPrivateLinkDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkDescribeOutput">ApiIntegrationGitRepositoryPrivateLinkDescribeOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputList <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

new apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

new apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationGitRepositoryPrivateLinkShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkShowOutput">ApiIntegrationGitRepositoryPrivateLinkShowOutput</a>

---


### ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference <a name="ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiIntegrationGitRepositoryPrivateLink } from '@cdktn/provider-snowflake'

new apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiIntegrationGitRepositoryPrivateLinkTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationGitRepositoryPrivateLink.ApiIntegrationGitRepositoryPrivateLinkTimeouts">ApiIntegrationGitRepositoryPrivateLinkTimeouts</a>

---



